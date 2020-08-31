import CryptoJS from 'crypto-js';

import { API_KEY, PRIV_KEY } from '../services/config/index';

export const HERO_ID_PREFIX: string = 'HERO_ID_PREFIX';

const MONTH: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];
export interface HashObj {
  ts: number;
  hashWord: string;
}

export const generateHash = () : HashObj => {  
  const ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + PRIV_KEY + API_KEY);
  let hashWord = hash.toString(CryptoJS.enc.Hex);

  return { ts, hashWord }
};