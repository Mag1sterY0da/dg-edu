import { createAuth0Client } from '@auth0/auth0-spa-js';
import { auth0Config } from 'shared/config';
import { User } from './types';

const whenAuth0Client = createAuth0Client(auth0Config);

export const login = async (): Promise<void> => {
  const auth0Client = await whenAuth0Client;
  await auth0Client.loginWithRedirect();
};

export const logout = async (): Promise<void> => {
  const auth0Client = await whenAuth0Client;
  await auth0Client.logout();
};

export const getCurrentUser = async (): Promise<User | undefined> => {
  const isAuthenticated = await checkAuthentication();

  if (isAuthenticated) return getUser();

  if (isRedirected()) {
    await handleRedirect();
    return getUser();
  }
};

const checkAuthentication = async (): Promise<boolean> => {
  const auth0Client = await whenAuth0Client;
  return auth0Client.isAuthenticated();
};

const handleRedirect = async (): Promise<void> => {
  const auth0Client = await whenAuth0Client;
  await auth0Client.handleRedirectCallback();
};

const getUser = async (): Promise<User> => {
  const auth0Client = await whenAuth0Client;
  const user = await auth0Client.getUser();

  return {
    id: user?.sub || '',
    nickname: user?.nickname || '',
  };
};

const isRedirected = (): boolean => {
  const query = window.location.search;
  return query.includes('code=') && query.includes('state=');
};
