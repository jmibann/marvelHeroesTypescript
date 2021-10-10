import CryptoJS from 'crypto-js';

import { API_KEY, PRIV_KEY } from '../services/config/index';

export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const PENDING = 'PENDING';

export const HERO_ID_PREFIX: string = 'HERO_ID_PREFIX';

type Date = {
  date: string;
  type: string;
};

type CreatorItem = {
  name: string;
  resourceURI: string;
  role: string;
}

export type ComicInfoFromFetch = {
  title: string;
  description: string;
  thumbnail: {
    extesion: string;
    path: string;
  };
  dates: Date[];
  creators: {
    items: CreatorItem[];
  };
};

const MONTH: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];
export interface HashObj {
  ts: number;
  hashWord: string;
}

export const generateHash = (): HashObj => {
  const ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + PRIV_KEY + API_KEY);
  let hashWord = hash.toString(CryptoJS.enc.Hex);

  return { ts, hashWord }
};

export const dateFormatter = (str: string): string => {
  let numbers = str.split('T');
  numbers = numbers[0].split('-');

  const year = numbers[0];
  const month = parseInt(numbers[1]) - 1;
  const day = numbers[2];

  return `${MONTH[month]} ${day}, ${year}`;
}

export const buildKey = (id: number): string => {
  return `HERO_ID_PREFIX_${id}`;
}


export const getWriter = (comicInfo: ComicInfoFromFetch): (string[] | undefined) => {
  const result = comicInfo?.creators?.items.filter(creator => creator.role === 'writer');
  if (result) {
    return result.map(writer => writer.name);
  } else {
    return
  };
};

export const getPenciler = (comicInfo: ComicInfoFromFetch): (string[] | undefined) => {
  const result = comicInfo?.creators?.items.filter(creator => creator.role.includes('penciler'));
  if (result) {
    result.map(writer => writer.name);
  }
  else {
    return
  }
};

export const getCoverArtist = (comicInfo: ComicInfoFromFetch): (string[] | undefined) => {
  const result = comicInfo?.creators?.items.filter(creator => (creator.role.includes('cover') && creator.role.includes('penciler')));
  if (result) {
    result.map(writer => writer.name);
  }
  else {
    return
  }
};

export function createResource<Type>(promise: Promise<Type>): {
  read: () => Type | Promise<Type>
} {
  let status = PENDING;
  let result: Type | Promise<any> = promise.then(
    resolved => {
      status = SUCCESS;
      result = resolved;
    },
    rejected => {
      status = ERROR;
      result = rejected;
    });

  return {
    read: () => {
      if (status === PENDING) throw result;
      if (status === ERROR) throw result;
      if (status === SUCCESS) return result as Type;
      throw new Error('This should be impossible');
    }
  }
}