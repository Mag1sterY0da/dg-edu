import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Typography } from 'shared/ui';
import { ProfilePageProps, tempUser } from '../model';

export const ProfilePage = ({ auth }: ProfilePageProps) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h1" gutterBottom>
          Profile Page {auth ? 'Authorized' : 'Not Authorized'}
        </Typography>
        {auth ? (
          <Stack gap={2}>
            <Typography variant="h4">
              {tempUser.username} #{tempUser.id}
            </Typography>

            <Button variant="contained" component={Link} to="/dg-edu/account">
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
