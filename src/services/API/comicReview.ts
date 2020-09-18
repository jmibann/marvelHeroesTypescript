import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';
import {ComicInfo} from '../../components/ComicReview';

const createComicQueryURL = (url: string) : string => {
  const { ts, hashWord } = generateHash();
  return url + '?apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hashWord
};


export const fetchComic = (uri : string) : Promise<ComicInfo> => {
  const ComicQueryURL = createComicQueryURL(uri);

  return get(ComicQueryURL)
    .then(res => res.data.data.results[0])
    .then(({ title, description, thumbnail }) => ({ title, description, thumbnail }))
};