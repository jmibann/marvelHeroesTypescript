import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';

import { HeroType } from '../../App';

const searchHeroesURI = '/characters?nameStartsWith=';

const createSearchURL = (input: string) => {
  const { ts, hashWord } = generateHash();
  return searchHeroesURI + input.toLowerCase() + '&orderBy=name&apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hashWord;
}

const transformToHeroType = (array: any): HeroType[] => {
  return array.map((item: any): HeroType => ({
    id: item.id,
    name: item.name,
    thumbnail: item.thumbnail,
    comics: item.comics.items
  }))
}

export const fetchSearchResult = (input: string): Promise<HeroType[]> => {

  const searchURL = createSearchURL(input);

  return get(searchURL).then(res => transformToHeroType(res.data.data.results))
}