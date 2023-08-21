import { Event, Store, createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';
import React from 'react';
import { Button, Container, Paper, TextField } from 'shared/ui';

const setUsername: Event<string> = createEvent();
const setPassword: Event<string> = createEvent();

const $usernameStore: Store<string> = createStore('').on(setUsername, (_, value) => value);
const $passwordStore: Store<string> = createStore('').on(setPassword, (_, value) => value);

export const HomePage = () => {
  const username: string = useStore($usernameStore);
  const password: string = useStore($passwordStore);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle submit
  };

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
        </form>
      </Paper>
    </Container>
  );
};

export default HomePage;
