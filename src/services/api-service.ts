//for wrapper
import axiosInstance from "./axios-instance";

export const GetRequest = async (url: string) => {
  return await axiosInstance.get(url);
};