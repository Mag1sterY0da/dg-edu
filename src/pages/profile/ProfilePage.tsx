import { User } from 'entities/session/model/type';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Typography } from 'shared/ui';

type Props = {
  auth?: boolean;
};

export const ProfilePage = ({ auth }: Props) => {
  const tempUser: User = {
    id: 0,
    nickname: 'John',
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h1" gutterBottom>
          Profile Page {auth ? 'Authorized' : 'Not Authorized'}
        </Typography>
        {auth ? (
          <Stack gap={2}>
            <Typography variant="h4">
              {tempUser.nickname} #{tempUser.id}
            </Typography>

            <Button variant="contained" component={Link} to="/account">
              Go to the account settings
            </Button>

            <Button variant="contained">Logout</Button>
          </Stack>
        ) : (
          <Typography variant="body1">You are not logged in</Typography>
        )}
      </Box>
    </Container>
  );
};
