import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';

import { Hero } from '../../App';

const searchHeroesURI = '/characters?nameStartsWith=';

const createSearchURL = (input: string) => {
  const { ts, hashWord } = generateHash();
  return searchHeroesURI + input.toLowerCase() + '&orderBy=name&apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hashWord;
}

const transformToHeroType = (array: any) : Hero[] => {
  return array.map((item: any) : Hero => ({
    id: item.id,
    name: item.name,
    thumbnail: item.thumbnail,
    comics: item.comics.items
  }))
}

export const fetchSearchResult = (input: string): Promise<Hero[]> => {

  const searchURL = createSearchURL(input);

  return get(searchURL).then(res => transformToHeroType(res.data.data.results))
}