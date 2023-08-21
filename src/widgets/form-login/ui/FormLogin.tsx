import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, TextField, Typography } from 'shared/ui';

export const FormLogin = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <form>
        <TextField label="Username" variant="outlined" fullWidth style={{ marginBottom: '16px' }} />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <Button variant="contained" color="primary" fullWidth component={Link} to="/profile">
          Log In
        </Button>
      </form>
    </Paper>
  );
};
