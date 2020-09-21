import React, { useState, useEffect } from 'react';

import CardsBoard from '../CardsBoard';

import { fetchSearchResult } from '../../services/API/searchResult';
import { TitleContainer } from './styles';

import {Hero} from '../../App';


interface Props {
  inputSearch: string;
};

const SearchResult: React.FC<Props> = ({ inputSearch }) => {

  const [searchResult, setSearchResult] = useState<Hero[]>();

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