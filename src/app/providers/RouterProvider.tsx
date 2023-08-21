import AccountPage from 'pages/account';
import HomePage from 'pages/home-page';
import ProfilePage from 'pages/profile';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { PATH_PAGE } from 'shared/lib/react-router';

export const Router = () => {
  const isAuth: boolean = true;

  return useRoutes([
    {
      path: PATH_PAGE.root,
      children: [
        {
          path: PATH_PAGE.root,
          element: <HomePage />,
        },
        {
          path: PATH_PAGE.profile,
          element: isAuth ? <ProfilePage auth={isAuth} /> : <ProfilePage />,
        },
        {
          path: PATH_PAGE.account,
          element: <AccountPage />,
        },
      ],
    },
  ]);
};
