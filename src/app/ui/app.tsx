import { useGate } from 'effector-react';
import { sessionModel } from 'entities/session';
import { Router } from 'pages';
import React from 'react';

export const App = () => {
  useGate(sessionModel.gate);

  return <Router />;
};
