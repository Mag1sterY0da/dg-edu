import { useStore } from 'effector-react';
import { sessionModel } from 'entities/session';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Typography } from 'shared/ui';

export const ProfilePage = () => {
  const user = useStore(sessionModel.$user);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h1" gutterBottom>
          {user ? 'Authorized' : 'Not Authorized'}
        </Typography>
        {user ? (
          <Stack gap={2}>
            <Typography variant="h4">
              {user.nickname} #{user.id}
            </Typography>

            <Button variant="contained" component={Link} to="/dg-edu/account">
              Go to the account settings
            </Button>

            <Button variant="outlined" onClick={() => sessionModel.logout()}>
              Logout
            </Button>
          </Stack>
        ) : (
          <Button variant="contained" onClick={() => sessionModel.loginFx()} fullWidth>
            Login
          </Button>
        )}
      </Box>
    </Container>
  );
};
