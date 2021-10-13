import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Row, Column } from '../../common';
import { ImageContainer } from '../ComicInfo/styles';
import {
  TextLabelContainer,
  TitleLabelContainer,
  SubTitleLabelContainer,
  SubTextLabelContainer
} from './styles';

const LoadingComic: React.FC<{}> = () => {

  const ImageSkeleton = () => (
    <Column xs='12' sm='6' md='5' lg='4' >
      <ImageContainer>
        <Skeleton width={"339px"} height={"521px"} />
      </ImageContainer>
    </Column>
  )

  const TextSkeleton = () => (
    <Column xs='12' sm='6' md='7' lg='8'>
      <TextLabelContainer aria-label='loading comic'>
        <TitleLabelContainer >
          <Skeleton width={"100%"} height="35px" />
        </TitleLabelContainer>

        <SubTitleLabelContainer>
          <Skeleton width={"100%"} height="30px" />
        </SubTitleLabelContainer>
        <SubTitleLabelContainer>
          <Skeleton width={"100%"} height="30px" />
        </SubTitleLabelContainer>

        <SubTextLabelContainer >
          <Skeleton style={{ marginTop: "15px" }} width={"100%"} height="23.2px" />
        </SubTextLabelContainer>
        <SubTextLabelContainer>
          <Skeleton width={"100%"} height="23.2px" />
        </SubTextLabelContainer>
        <SubTextLabelContainer>
          <Skeleton width={"100%"} height="23.2px" />
        </SubTextLabelContainer>
        <SubTextLabelContainer>
          <Skeleton width={"100%"} height="23.2px" />
        </SubTextLabelContainer>
      </TextLabelContainer>
    </Column >
  )

  return (
    <Row>
      <ImageSkeleton />
      <TextSkeleton />
    </Row>
  )
};

export default LoadingComic;