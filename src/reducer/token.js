
import { cookieFetch } from '../lib/utils';

const TOKEN_COOKIE_KEY = 'X-Pizza-Token';
const token = cookieFetch(TOKEN_COOKIE_KEY);
const initialState = token || null;





export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};