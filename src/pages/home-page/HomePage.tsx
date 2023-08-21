import React from 'react';
import { Container } from 'shared/ui';
import { FormLogin } from 'widgets/form-login';

export const HomePage = () => {
  return (
    <Container maxWidth="md">
      <FormLogin />
    </Container>
  );
};

export default HomePage;
