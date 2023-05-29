import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ROUTER_KEYS, STORAGE_KEYS } from '../common/consts/app-keys.const';
import DetailsPageContainer from '../views/details/details.container';
import HomePageContainer from '../views/home/home.container';
import { PrivateRoute } from './private-route';
import { PublicRoute } from './public-route';
import LoginPageContainer from '../views/login/login.container';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TSetValueFunction } from '../types/localstorage.types';
import { currentUser } from '../../utils/auth/getCurrentUser';
import ProfilePageContainer from '../views/profile/profile.container';

export const MainRouter = () => {
  const [result, setValue, removeValue] = useLocalStorage(STORAGE_KEYS.TOKEN, '');

  useEffect(() => {
    (async () => {
      await currentUser(result, setValue as TSetValueFunction, removeValue);
    })();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTER_KEYS.ROOT}
          element={<PrivateRoute component={<HomePageContainer />} redirectTo={ROUTER_KEYS.AUTH} />}
        />

        <Route
          path={ROUTER_KEYS.DETAILS}
          element={
            <PrivateRoute component={<DetailsPageContainer />} redirectTo={ROUTER_KEYS.AUTH} />
          }
        />

        <Route
          path={ROUTER_KEYS.PROFILE}
          element={
            <PrivateRoute component={<ProfilePageContainer />} redirectTo={ROUTER_KEYS.AUTH} />
          }
        />

        <Route
          path={ROUTER_KEYS.AUTH}
          element={<PublicRoute component={<LoginPageContainer />} redirectTo={ROUTER_KEYS.ROOT} />}
        />

        <Route path="*" element={<PublicRoute component={<Navigate to={ROUTER_KEYS.ROOT} />} />} />
      </Routes>
    </Router>
  );
};
