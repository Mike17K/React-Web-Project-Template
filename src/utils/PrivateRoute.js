import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);

  // TODO change to a final way how to hgandle the private routes
  return !!currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;