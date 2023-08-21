import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './RouterProvider';

export const Providers = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
