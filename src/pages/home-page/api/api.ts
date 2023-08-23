import { createAuth0Client } from '@auth0/auth0-spa-js';
import { User } from 'entities/session/model/type';
import { auth0Config } from 'shared/config';

const whenAuth0Client = createAuth0Client(auth0Config);

// Just temp function for login
export const loginUser = async (): Promise<User> => {
  const auth0Client = await whenAuth0Client;
  const user = await auth0Client.getUser();

  return {
    id: user?.id || '',
    login: user?.login || '',
    password: user?.password || '',
    username: user?.username || '',
  };
};
