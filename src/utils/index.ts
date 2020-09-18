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

export const dateFormatter = (str: string) : string => {
  let numbers = str.split('T');
  numbers = numbers[0].split('-');

  const year = numbers[0];
  const month = parseInt(numbers[1]) - 1;
  const day = numbers[2];

  return `${MONTH[month]} ${day}, ${year}`;
}

export const buildKey = (id: number) : string => {
  return `HERO_ID_PREFIX_${id}`;
}