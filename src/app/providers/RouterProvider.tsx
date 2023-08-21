import AccountPage from 'pages/account';
import ProfilePage from 'pages/profile';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { PATH_PAGE } from 'shared/lib/react-router';

export const Router = () => {
  const isAuth: boolean = true;

  return useRoutes([
    {
      path: PATH_PAGE.root,
      element: <Navigate to={PATH_PAGE.profile} />,
    },
    {
      path: PATH_PAGE.profile,
      element: isAuth ? <ProfilePage auth /> : <ProfilePage />,
    },
    {
      path: PATH_PAGE.account,
      element: <AccountPage />,
    },
  ]);
};
