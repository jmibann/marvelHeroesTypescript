import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';

import { ReceivedHeroes } from '../../components/SearchResult';

const searchHeroesURI = '/characters?nameStartsWith=';

const createSearchURL = (input: string) => {
  const { ts, hashWord } = generateHash();
  return searchHeroesURI + input.toLowerCase() + '&orderBy=name&apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hashWord;
}

export const fetchSearchResult = (input: string): Promise<ReceivedHeroes[]> => {

  const searchURL = createSearchURL(input);

  return get(searchURL).then(res => res.data.data.results)
}