import { API_KEY, LIMIT, get } from '../config/index';

import { generateHash, HashObj } from '../../utils/index';
import {Hero} from '../../App';

const HEROES_QTY = 8;
const RandomHeroesURL = '/characters?modifiedSince=1990&orderBy=name&limit=' + LIMIT;

const getRandomIndexes = (quantity: number) : number[] => {
  let array: number[]= [];

  for (let i = 0; array.length < quantity; i++) {
    let randomIndex = Math.floor(Math.random() * 100);

    if (array.indexOf(randomIndex) < 0) array = [...array, randomIndex];
  }

  return array
}

const createRandomHeroQueryURL = () : string => {
  let Hash: HashObj = generateHash();
  return RandomHeroesURL + '&apikey=' + API_KEY + "&ts=" + Hash.ts + "&hash=" + Hash.hashWord;
}

const selectRandomHeroes = (heroesArray: any, quantity: number ) : Hero[] => {
  let randomIndexes = getRandomIndexes(quantity);

  return randomIndexes.map(index => ({
    id: heroesArray[index].id,
    name: heroesArray[index].name,
    thumbnail: heroesArray[index].thumbnail,
    comics: heroesArray[index].comics.items
  })
  )
}

export const fetchRandomHeroes = () : Promise<Hero[]> => {

  const RandomHeroQueryURL = createRandomHeroQueryURL();

  return get(RandomHeroQueryURL)
    .then(res => res.data.data.results)
    .then(heroesArray => selectRandomHeroes(heroesArray, HEROES_QTY))
}