import AccountPage from 'pages/account';
import HomePage from 'pages/home-page';
import ProfilePage from 'pages/profile';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_PAGE } from 'shared/lib/react-router';

export const Router = () => {
  const isAuth: boolean = true;

  return (
    <Routes>
      <Route path={PATH_PAGE.root} element={<HomePage />} />
      <Route
        path={PATH_PAGE.profile.root}
        element={isAuth ? <ProfilePage auth={isAuth} /> : <ProfilePage />}
      />
      <Route path={PATH_PAGE.account.root} element={<AccountPage />} />
    </Routes>
  );
};
