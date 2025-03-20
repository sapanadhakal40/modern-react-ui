import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30 * 60,
});
const refreshToken = async () => {
  try {
    const response = await axiosInstance.post("/auth/refresh-token", {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data.token;
  } catch (error) {
    console.log(error);
  }
}

//request interceptor to add the auth token

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//response interceptor to refresh token(before response is returned to the caller)
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = await refreshToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;