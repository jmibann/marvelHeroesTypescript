import React, { useState, useEffect } from 'react';

// import { InputContext } from './context';
// import { ThemeProvider } from "styled-components";

// import Header from './components/Header';
// import Landing from './components/Landing';
// import SearchResult from './components/SearchResult';
// import ComicInfo from './components/ComicInfo';

import { fetchRandomHeroes } from './services/API/landing';

import './App.css';

interface Thumbnail {
  path: string;
  extension: string;
}

interface Comic {
  name: string;
  resourceURI: string;
}
interface Hero {
  id: number;
  name: string;
  thumbnail: Thumbnail;
  comics: Array<Comic>

}

const App: React.FC = () => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  const [inputSearchComic, setInputSearchComic] = useState<string>('');
  const [landingHeroes, setLandingHeroes] = useState<Array<Hero>>([]);

  useEffect(() => {
    const loadHeroes = async () => await fetchRandomHeroes().then((heroes: Hero[]) => setLandingHeroes(heroes));

    loadHeroes();
  }, []);

  return (
    <div className="App">
      {/* <ThemeProvider theme={{ mode: currentTheme }}>
        <InputContext.Provider value={{ input: inputSearch, setInput: setInputSearch, setInputComic: setInputSearchComic }}>
          <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        </InputContext.Provider>

        {!inputSearch.length && !inputSearchComic.length ? <Landing landingHeroes={landingHeroes} /> : null}

        {inputSearch.length && !inputSearchComic.length ? <SearchResult inputSearch={inputSearch} /> : null}

        {(inputSearch && inputSearchComic) ? <ComicInfo comicId={inputSearchComic} /> : null}
      </ThemeProvider> */}
    </div>
  );
}

export default App;
