import React, { useState, useEffect } from 'react';

import { fetchComic } from '../../services/API/comicReview';
import { ReviewContainer, PreviewImage, TitleDescContainer, Description, Title } from './styles';

const MAX_CHAR = 200;

interface Props {
  comic: Comic;
};

interface Comic {
  name: string;
  resourceURI: string;
};

export interface ComicInfo {
  title: string;
  description: string;
  thumbnail: {
    extesion: string;
    path: string;
  };
};

const ComicReview: React.FC<Props> = ({ comic }) => {

  const [selectedComic, setSelectedComic] = useState<ComicInfo | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadComic = async () => await fetchComic(comic.resourceURI).then(comic => {
      if (isMounted) {
        setSelectedComic(comic);
      } else {
        setSelectedComic(null);
      }
    }
    );

    loadComic();

    return () => {
      isMounted = false;
      return;
    };
  }, [comic.resourceURI]);


  const charachtersLimiter = (str: string, max = MAX_CHAR) => {
    if (!str && !str.length) return;
    return str.slice(0, max) + '...';
  }

  const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    // e.target.onerror = null;
    // e.target.src = './imageNotFound.png';
    e.currentTarget.onerror = null;
    e.currentTarget.src = './imageNotFound.png';
  }

  return (
    <ReviewContainer >
      {
        selectedComic
          ? <>
            <PreviewImage
              src={selectedComic.thumbnail.path + '/portrait_small.jpg'}
              onError={addDefaultSrc}
            />
            <TitleDescContainer>
              <Title>{selectedComic.title}</Title>
              <Description>{selectedComic.description ? charachtersLimiter(selectedComic.description) : null}</Description>
            </TitleDescContainer>
          </>
          : null
      }
    </ReviewContainer>
  )
};

export default ComicReview;