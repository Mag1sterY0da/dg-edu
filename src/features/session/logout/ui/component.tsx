import React from 'react';
import { Button } from 'shared/ui';
import { logoutRequested } from '../model';

export const LogoutButton = () => {
  return (
    <Button variant="outlined" onClick={() => logoutRequested()}>
      Logout
    </Button>
  );
};
