import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const isAuthenticated = false;

export default function AuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    }, [ navigate]);

    return < Outlet />;
}