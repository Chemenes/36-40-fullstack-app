import superagent from 'superagent';
import * as routes from '../lib/routes';
import { cookieDelete } from '../lib/utils';

const TOKEN_COOKIE_KEY = 'X-Pizza-Token';

// These are sync action creators

export const setToken = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

// we don't need a payload here because all we're doing is taking the token that is already set as a cookie in our browser and removing it
export const removeToken = () => ({
  type: 'TOKEN_REMOVE',
});

export const logout = () => {
  // 1. Delete the cookie from the browser
  // 2. Dispatch the "TOKEN_REMOVE" action to the Redux store
  cookieDelete(TOKEN_COOKIE_KEY);
  return removeToken();
};

export const userSignup = user => (store) => {
  return superagent.post(`${API_URL}${routes.SIGNUP_ROUTE}`)
    .send(user)
    .withCredentials()
    .then((response) => {
      return store.dispatch(setToken(response.body.token));
    });
};

export const userLogin = user => (store) => {
  return superagent.get(`${API_URL}${routes.LOGIN_ROUTE}`)
    .auth(user.username, user.password)
    .withCredentials()
    .then((response) => {
      return store.dispatch(setToken(response.body.token));
    });
};

