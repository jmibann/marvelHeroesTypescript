import React, { useState, useEffect, Suspense } from 'react';

import { CardsBoard, LoadingHeroes } from '../../components';

import { createResource } from '../../utils';
import { fetchSearchResult } from '../../services/API/searchResult';
import { TitleContainer, SearchContainer } from './styles';
import { HeroType } from '../../App';

type SearchResultProps = {
  inputSearch: string;
};

type ResultType = {
  read: () => HeroType[] | Promise<HeroType[]>;
}

const createSearchHeroesResource =
  (keyword: string) => createResource(fetchSearchResult(keyword));;

const SearchResult: React.FC<SearchResultProps> = ({ inputSearch }) => {
  const [searchResult, setSearchResult] = useState<ResultType>();

  useEffect(() => {
    let isMounted = true;

    // const loadSearchResult =
    //   async (input: string) => await fetchSearchResult(input)
    //     .then(result => {
    //       if (isMounted) {
    //         setSearchResult(result);
    //       } else {
    //         return;
    //       }
    //     })

    // loadSearchResult(inputSearch);

    if (isMounted) {
      setSearchResult(createSearchHeroesResource(inputSearch));
    } else {
      return;
    }

    return () => {
      isMounted = false;
      return;
    }
  }, [inputSearch])

  return (
    <SearchContainer>
      <TitleContainer> Results: {inputSearch} </TitleContainer>

      {
        searchResult &&
        <Suspense fallback={<LoadingHeroes />}>
          <CardsBoard heroes={searchResult} />
        </Suspense>}

    </SearchContainer>
  )
}

export default SearchResult;