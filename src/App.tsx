import React, { useState } from 'react';
import './App.css';

import { InputContext } from './context';
import { ThemeProvider } from "styled-components";

import {
  Header,
  Landing,
  SearchHero,
  SearchComic,
} from './components';
import { createResource } from './utils';
import { fetchRandomHeroes } from './services/API/landing';
import { AppContainer } from './styles';

type ThumbnailType = {
  path: string;
  extension: string;
}

type ComicType = {
  name: string;
  resourceURI: string;
}
export type HeroType = {
  id: number;
  name: string;
  thumbnail: ThumbnailType;
  comics: Array<ComicType>;
}

export type HeroResourceType = {
  read: () => HeroType[] | Promise<HeroType[]>;
}

const INITIAL_THEME = 'light'

const createRandomHeroesResource = () => createResource(fetchRandomHeroes());
const randomHeroesResource = createRandomHeroesResource();

const App: React.FC<{}> = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [currentTheme, setCurrentTheme] = useState(INITIAL_THEME);
  const [inputSearchComic, setInputSearchComic] = useState('');

  const isSearchingNothing = Boolean(!inputSearch.length && !inputSearchComic.length);
  const isSearchingHero = Boolean(inputSearch.length && !inputSearchComic.length);
  const isSearchingComic = Boolean(inputSearch && inputSearchComic);

  const inputContextValue = {
    input: inputSearch,
    setInput: setInputSearch,
    setInputComic: setInputSearchComic
  };

  return (
    <ThemeProvider theme={{ mode: currentTheme }}>
      <AppContainer>
        <InputContext.Provider value={inputContextValue}>
          <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        </InputContext.Provider>

        {isSearchingNothing && <Landing randomHeroesResource={randomHeroesResource} />}

        {isSearchingHero && <SearchHero inputSearch={inputSearch} />}

        {isSearchingComic && <SearchComic comicId={inputSearchComic} />}

      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
