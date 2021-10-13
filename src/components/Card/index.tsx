import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import {
  CardComponent,
  HeroImage,
  Name,
  Star,
  ImageFrame,
} from './styles';

import { buildKey } from '../../utils';
import { HeroType } from '../../App';

const myStorage = window.localStorage;

interface Props {
  hero: HeroType;
  onClick: (item: HeroType) => void;
};

function Card({ hero, onClick }: Props): (JSX.Element) {

  const [isFav, setIsFav] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (myStorage.getItem(buildKey(hero.id))) setIsFav(true);
  }, [hero.id]);

  const { id, name, thumbnail } = hero;

  // myStorage.clear();

  const saveAsFav = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    if (!myStorage.getItem(buildKey(id))) {
      myStorage.setItem(buildKey(id), name);
      setIsFav(true);
    }
  }

  const removeAsFav = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    if (myStorage.getItem(buildKey(id))) {
      myStorage.removeItem(buildKey(id));
      setIsFav(false);
    }
  }

  const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>): (void | undefined) => {
    if (!errored) {
      e.preventDefault();
      setErrored(true);
      e.currentTarget.onerror = null;
      e.currentTarget.src = './imageNotFoundFantastic.png'
    }
  }

  return (
    <CardComponent>
      <ImageFrame onClick={() => onClick(hero)} aria-label='hero card' >
        <HeroImage
          src={thumbnail.path + '/portrait_fantastic.jpg'}
          onError={addDefaultSrc}
          onLoad={() => setIsImageLoaded(true)}
        />

        {!isImageLoaded && <Skeleton width={"256px"} height={"384px"} />}

        <Star onClick={isFav ? removeAsFav : saveAsFav}>
          {isFav
            ? <AiFillStar />
            : <AiOutlineStar />
          }
        </Star>
        <Name>{name.toUpperCase()}</Name>
      </ImageFrame>
    </CardComponent>
  );
}

export default Card;