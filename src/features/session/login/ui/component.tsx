import React from 'react';
import { Button } from 'shared/ui';
import { loginRequested } from '../model';

export const LoginButton = () => {
  return (
    <Button variant="contained" onClick={() => loginRequested()} fullWidth>
      Login
    </Button>
  );
};
