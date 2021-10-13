import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Row, Column } from '../../common';
import { CardsContainer, } from '../../components/CardsBoard/styles';
import { SkeletonContainer } from './styles';


const LoadingHeroes: React.FC<{}> = () => {
  const skeletonCards = Array.from(Array(8).keys());

  const SkeletonCards = () => (
    <>
      {skeletonCards.map(skeleton =>
        <Column xs='12' sm='6' md='4' lg='3' key={`skeleton-${skeleton}`}>
          <SkeletonContainer aria-label='loading card'>
            <Skeleton width={"256px"} height={"384px"} />
          </SkeletonContainer>
        </Column>
      )}
    </>
  )

  return (
    <CardsContainer>
      <Row>
        <SkeletonCards />
      </Row>
    </CardsContainer >
  )
};

export default LoadingHeroes;