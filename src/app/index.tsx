import { Auth0Provider } from '@auth0/auth0-react';
import { Router } from 'pages';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { auth0Config } from 'shared/config/auth0-config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: auth0Config.redirectUri,
      }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
);
