import React, { Suspense } from 'react';

import { CardsBoard, LoadingHeroes } from '../../components';

import { HeroResourceType } from '../../App';

type LandingProps = {
  randomHeroesResource: HeroResourceType;
};

const Landing: React.FC<LandingProps> = ({ randomHeroesResource }) => {
  return (
    <Suspense fallback={<LoadingHeroes />}>
      <CardsBoard heroes={randomHeroesResource} />
    </Suspense>
  )
}

export default Landing;