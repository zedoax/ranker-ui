import {createUserManager} from 'redux-oidc';
import {WebStorageStateStore} from "oidc-client";

const settings = {
  client_id: process.env.REACT_APP_OIDC_CLIENT_ID,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: 'token id_token',
  scope: 'openid profile profile:twitter, profile:twitch',
  authority: process.env.REACT_APP_OIDC_AUTHORITY,
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew`,
  post_logout_redirect_uri: process.env.REACT_APP_RANKER_URI,
  automaticSilentRenew: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage })
};

const userManager = createUserManager(settings);

export default userManager;