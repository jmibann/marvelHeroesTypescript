
import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';
import { ComicInfoFromFetch } from '../../utils/index';

const comicURI = '/comics/'

const createComicQueryURL = (id: (number | string)): string => {
  const { ts, hashWord } = generateHash();
  return comicURI + id + '?apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hashWord;
}

export const fetchComic = (id: (number | string), errorHandler: () => void): Promise<ComicInfoFromFetch> => {
  const comicQueryURL = createComicQueryURL(id);

  return get(comicQueryURL)
    .then(res => res.data.data.results[0])
    .catch(error => errorHandler())
}