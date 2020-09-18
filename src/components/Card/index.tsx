import React, { useState, useEffect } from 'react';

import { CardComponent, HeroImage, Name, Star, ImageFrame } from './styles';

import { buildKey } from '../../utils';
import {Hero} from '../../App';

const myStorage = window.localStorage;

interface Props {
  hero: Hero ;
  onClick: (item: Hero) => void;
};

function Card ({hero, onClick}: Props) : (JSX.Element) {

  const [isFav, setIsFav] = useState<boolean>(false);

  useEffect(() => {
    if (myStorage.getItem(buildKey(hero.id))) setIsFav(true);
  }, [hero.id]);

  const { id, name, thumbnail } = hero;

  // myStorage.clear();

  const saveAsFav = (e: React.MouseEvent<HTMLElement, MouseEvent>) : void => {
    e.stopPropagation();
    if (!myStorage.getItem(buildKey(id))) {
      myStorage.setItem(buildKey(id), name);
      setIsFav(true);
    }
  }

  const removeAsFav = (e: React.MouseEvent<HTMLElement, MouseEvent>) : void  => {
    e.stopPropagation();
    if (myStorage.getItem(buildKey(id))) {
      myStorage.removeItem(buildKey(id));
      setIsFav(false);
    }
  }

  const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>) : (void | undefined)  => {
    e.preventDefault();
    // e.target.onerror  = null;
    // e.target.src = './imageNotFoundFantastic.png'
    e.currentTarget.onerror = null;
    e.currentTarget.src = './imageNotFoundFantastic.png'
  }

  return (
    <CardComponent>
      <ImageFrame onClick={() => onClick(hero)} >
        <HeroImage src={thumbnail.path + '/portrait_fantastic.jpg'} onError={addDefaultSrc}/>
        <Star>
          {isFav
            ? <i className="fas fa-star" onClick={removeAsFav}></i>
            : <i className="far fa-star" onClick={saveAsFav}></i>
          }
        </Star>
        <Name>{name.toUpperCase()}</Name>
      </ImageFrame>
    </CardComponent>
  );
}

export default Card;