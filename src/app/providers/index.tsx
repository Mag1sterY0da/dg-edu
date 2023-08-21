import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Router } from './RouterProvider';

export const Providers = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
};
