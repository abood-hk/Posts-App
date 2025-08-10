import { Navigate } from 'react-router-dom';
import React from 'react';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = localStorage.getItem('token');

  if (isLoggedIn === 'show') {
    return children;
  }
  return <Navigate to={'/login'} replace />;
};

export default ProtectedRoute;
