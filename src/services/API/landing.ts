import { API_KEY, LIMIT, get } from '../config/index';

import { generateHash } from '../../utils/index';

const HEROES_QTY = 8;
const RandomHeroesURL = '/characters?modifiedSince=1990&orderBy=name&limit=' + LIMIT;

const getRandomIndexes = (quantity) => {
  let array = [];

  for (let i = 0; array.length < quantity; i++) {
    let randomIndex = Math.floor(Math.random() * 100);

    if (array.indexOf(randomIndex) < 0) array = [...array, randomIndex];
  }

  return array
}

const createRandomHeroQueryURL = () => {
  let { ts, hash } = generateHash();
  return RandomHeroesURL + '&apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hash;
}

const selectRandomHeroes = ({ heroesArray, quantity }) => {
  let randomIndexes = getRandomIndexes(quantity);

  return randomIndexes.map(index => ({
    id: heroesArray[index].id,
    name: heroesArray[index].name,
    thumbnail: heroesArray[index].thumbnail,
    comics: heroesArray[index].comics.items
  })
  )
}

export const fetchRandomHeroes = () => {

  const RandomHeroQueryURL = createRandomHeroQueryURL();

  return get(RandomHeroQueryURL)
    .then(res => res.data.data.results)
    .then(heroesArray => selectRandomHeroes({ heroesArray, quantity: HEROES_QTY }))
}