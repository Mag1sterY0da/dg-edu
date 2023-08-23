import { useStore } from 'effector-react';
import React from 'react';
import { Button, Container, Paper, TextField } from 'shared/ui';
import * as model from '../model';

export const HomePage = () => {
  const username: string = useStore(model.$usernameStore);
  const password: string = useStore(model.$passwordStore);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <form onSubmit={() => model.loginUserRequested}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '16px' }}
            value={username}
            onChange={(e) => model.usernameChanged(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            style={{ marginBottom: '16px' }}
            value={password}
            onChange={(e) => model.passwordChanged(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log In
          </Button>
          <Button type="button" variant="contained" color="secondary" fullWidth>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
