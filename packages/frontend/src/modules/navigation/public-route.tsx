import React from 'react';
import { Navigate } from 'react-router-dom';
import { STORAGE_KEYS, ROUTER_KEYS } from '../common/consts/app-keys.const';
import { PrivateRouteProps } from '../types/routes.type';

export const PublicRoute = ({ component, redirectTo = ROUTER_KEYS.ROOT }: PrivateRouteProps) => {
  const isLoggedIn = localStorage.getItem(STORAGE_KEYS.TOKEN);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
