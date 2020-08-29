import CryptoJS from 'crypto-js';

import { API_KEY, PRIV_KEY } from '../services/config/index';

export const generateHash = () => {
  const ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + PRIV_KEY + API_KEY);
  hash = hash.toString(CryptoJS.enc.Hex);

  return { ts, hash }
};