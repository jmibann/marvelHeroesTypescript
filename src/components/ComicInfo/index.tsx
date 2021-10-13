import React, { useState } from 'react';

import { dateFormatter } from '../../utils';

import {
  ImageContainer,
  Image,
  Details,
  Title,
  Miscelaneous,
  Description
} from './styles';
import { Row, Column } from '../../common';

import {
  getWriter,
  getPenciler,
  getCoverArtist,
  ComicInfoFromFetch
} from '../../utils';

type ComicInfoComponentProps = {
  comicResource: {
    read: () => ComicInfoFromFetch | Promise<ComicInfoFromFetch>;
  }
};

const ComicInfo: React.FC<ComicInfoComponentProps> = ({ comicResource }) => {
  const comic = comicResource.read() as ComicInfoFromFetch;
  const [errored, setErrored] = useState(false);
  // const [comicInfo, setComicInfo] = useState<ComicInfoFromFetch>();

  // useEffect(() => {
  //   const loadComic = async () => await fetchComic(comicId).then(comic => setComicInfo(comic));

  //   loadComic();
  // }, [comicId]);

  const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>): (void | undefined) => {
    if (!errored) {
      e.preventDefault();
      setErrored(true);
      e.currentTarget.onerror = null;
      e.currentTarget.src = './imageNotFoundFantastic.png'
    }
  }

  return (
    <Row >
      <Column xs='12' sm='6' md='5' lg='4' >
        <ImageContainer>
          <Image
            src={comic.thumbnail.path + '/clean.jpg'}
            onError={addDefaultSrc}
          />
        </ImageContainer>
      </Column>

      <Column xs='12' sm='6' md='7' lg='8' backGround={'rgb(247, 248, 250)'}>
        <Details>
          <Title>{comic.title}</Title>

          <Miscelaneous>Published: {dateFormatter(comic.dates[0].date)}</Miscelaneous>
          <Miscelaneous>Writer: {getWriter(comic)?.join(' - ')}</Miscelaneous>

          {getPenciler(comic) &&
            <Miscelaneous>Penciler: {getPenciler(comic)?.join(' - ')}</Miscelaneous>
          }

          {getCoverArtist(comic)?.length &&
            <Miscelaneous>Cover Artist: {getCoverArtist(comic)?.join(' - ')}</Miscelaneous>
          }

          <Description>{comic.description}</Description>
        </Details>
      </Column>
    </Row>
  )

}


export default ComicInfo;


