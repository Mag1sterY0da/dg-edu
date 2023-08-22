import { useStore } from 'effector-react';
import React from 'react';
import { Button, Container, Paper, TextField } from 'shared/ui';
import {
  $passwordStore,
  $usernameStore,
  handleSubmit as onSubmit,
  setPassword,
  setUsername,
} from '../model';

export const HomePage = () => {
  const username: string = useStore($usernameStore);
  const password: string = useStore($passwordStore);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <form onSubmit={onSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '16px' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            style={{ marginBottom: '16px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
