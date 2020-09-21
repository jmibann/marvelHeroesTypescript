import React, { useState, useEffect } from 'react';

import CardsBoard from '../CardsBoard';

import { fetchSearchResult } from '../../services/API/searchResult';
import { TitleContainer } from './styles';


interface Props {
  inputSearch: string;
};

interface HeroComics {
  name: string;
  resourceURI: string;
};

export interface ReceivedHeroes {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  comics: HeroComics[];
}


const SearchResult: React.FC<Props> = ({ inputSearch }) => {

  const [searchResult, setSearchResult] = useState<ReceivedHeroes[]>();

  useEffect(() => {
    let isMounted = true;
    const loadSearchResult = async (input: string) => await fetchSearchResult(input).then(result => {
      if (isMounted) {
        setSearchResult(result);
      } else {
        return;
      }
    })

    loadSearchResult(inputSearch);

    return () => {
      isMounted = false;
      return;
    }
  }, [inputSearch])

  return (
    <div>
      <TitleContainer> Results: {inputSearch} </TitleContainer>

      {searchResult && <CardsBoard heroes={searchResult} />}
    </div>
  )
}

export default SearchResult;