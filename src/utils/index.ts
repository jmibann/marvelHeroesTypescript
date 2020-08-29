import CryptoJS from 'crypto-js';

import { API_KEY, PRIV_KEY } from '../services/config/index';

interface HashObj {
  ts: number;
  hashString: string;
}

export const generateHash = () => {
  const ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + PRIV_KEY + API_KEY);
  let hashString = hash.toString(CryptoJS.enc.Hex);

  return { ts, hashString }
};