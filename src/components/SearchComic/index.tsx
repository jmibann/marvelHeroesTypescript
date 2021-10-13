import React, { Suspense, useEffect, useState } from 'react';

import { ComicInfo, LoadingComic } from '../../components';
import { ErrorMessage } from './styles';
import { createResource } from '../../utils';
import { fetchComic } from '../../services/API/comicInfo';

type SearchComicProps = {
  comicId: string;
};

const createComicResource = (comicId: string, errorHandler: () => void) => {
  return createResource(fetchComic(comicId, errorHandler))
}

const SearchComic: React.FC<SearchComicProps> = ({ comicId }) => {
  const [isError, setIsError] = useState(false);

  const onError = () => setIsError(true);

  const [comicResource, setComicResource] = useState(createComicResource(comicId, onError));

  useEffect(() => {
    setComicResource(createComicResource(comicId, onError));
  }, [comicId]);


  return isError
    ? <ErrorMessage>There's a problem. Please verify the address is correct.</ErrorMessage>
    : (
      <Suspense fallback={<LoadingComic />}>
        <ComicInfo comicResource={comicResource} />
      </Suspense>
    )
};

export default SearchComic;


