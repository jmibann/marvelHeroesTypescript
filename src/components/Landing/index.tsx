import React from 'react';

import CardsBoard from '../CardsBoard';
import { Hero } from '../../App';

interface Props {
  landingHeroes: Hero[];
}

const Landing: React.FC<Props> = ({ landingHeroes }) => {

  return <CardsBoard heroes={landingHeroes} />
}

export default Landing;