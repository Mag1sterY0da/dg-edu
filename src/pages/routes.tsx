import { AccountPage } from 'pages/account';
import { ProfilePage } from 'pages/profile';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_PAGE } from 'shared/lib/react-router';

export const Router = () => {
  return (
    <Routes>
      <Route path={PATH_PAGE.root} element={<ProfilePage />} />
      <Route path={PATH_PAGE.account.root} element={<AccountPage />} />
    </Routes>
  );
};
