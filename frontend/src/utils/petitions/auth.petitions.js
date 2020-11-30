import axios from 'axios';
import { HEADERS } from './petitions.constants';

import apiURL from '../apiURL'

const authHTTPObject = axios.create({
  baseURL: apiURL,
});

const auth = {
  login(loginInfo = {}) {
    return authHTTPObject.post('login', loginInfo, { headers: HEADERS }).then((response) => response.data.data);
  },
};

export default auth;
