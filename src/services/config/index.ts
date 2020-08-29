import Axios from 'axios';

export const LIMIT = 100;

export const API_KEY = '56ad80f3f9b11b63eeff8df6e0587616';
export const PRIV_KEY = 'a9e2a2085ce5fd2e5cdcaf1778b662674d8b70c0';

const BuildConfig = {
  default: {
    API_ENV: 'development',
  }
}

const BASE_URL = 'https://gateway.marvel.com:443/v1/public';

const apiEnv =
  BuildConfig.default.API_ENV == null
    ? BuildConfig.API_ENV
    : BuildConfig.default.API_ENV;

const API_URL = BASE_URL + `${apiEnv === 'development' ? '' : ''}`;

const apiClient = Axios.create({ baseURL: API_URL });

const { get, post, put, delete: destroy } = apiClient;

export { get, post, put, destroy };