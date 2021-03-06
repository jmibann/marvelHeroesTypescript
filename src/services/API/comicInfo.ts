
import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';
import { ComicInfoFromFetch } from '../../components/ComicInfo';

const comicURI = '/comics/'

const createComicQueryURL = (id: (number | string)): string => {
  const { ts, hashWord } = generateHash();
  return comicURI + id + '?apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hashWord;
}

export const fetchComic = (id: (number | string)): Promise<ComicInfoFromFetch> => {
  const comicQueryURL = createComicQueryURL(id);

  return get(comicQueryURL).then(res => res.data.data.results[0])
} 