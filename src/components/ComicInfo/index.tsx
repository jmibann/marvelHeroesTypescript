import React, { useState, useEffect } from 'react';

import { fetchComic } from '../../services/API/comicInfo';
import { dateFormatter } from '../../utils';

import { Container, Image, Details, Title, Miscelaneous, Description } from './styles';
import { Row, Column } from '../../common';

interface Props {
  comicId: string;
};

interface Date {
  date: string;
  type: string;
};

interface CreatorItem {
  name: string;
  resourceURI: string;
  role: string;
}

export interface ComicInfoFromFetch {
  title: string;
  description: string;
  thumbnail: {
    extesion: string;
    path: string;
  };
  dates: Date[];
  creators: {
    items: CreatorItem[];
  };
};

const getWriter = (comicInfo: ComicInfoFromFetch): (string[] | undefined) => {
  const result = comicInfo?.creators?.items.filter(creator => creator.role === 'writer');
  if (result) {
    return result.map(writer => writer.name);
  } else {
    return
  };
};

const getPenciler = (comicInfo: ComicInfoFromFetch): (string[] | undefined) => {
  const result = comicInfo?.creators?.items.filter(creator => creator.role.includes('penciler'));
  if (result) {
    result.map(writer => writer.name);
  }
  else {
    return
  }
};

const getCoverArtist = (comicInfo: ComicInfoFromFetch): (string[] | undefined) => {
  const result = comicInfo?.creators?.items.filter(creator => (creator.role.includes('cover') && creator.role.includes('penciler')));
  if (result) {
    result.map(writer => writer.name);
  }
  else {
    return
  }
};

const ComicInfoComponent: React.FC<Props> = ({ comicId }) => {

  const [comicInfo, setComicInfo] = useState<ComicInfoFromFetch>();

  useEffect(() => {
    const loadComic = async () => await fetchComic(comicId).then(comic => setComicInfo(comic));

    loadComic();
  }, [comicId]);


  return (

    <Row >
      <Column xs='12' sm='6' md='5' lg='4' >
        <Container>
          {comicInfo ? <Image src={comicInfo.thumbnail.path + '/clean.jpg'} /> : null}
        </Container>
      </Column>

      <Column xs='12' sm='6' md='7' lg='8' backGround={'rgb(247, 248, 250)'}>
        {comicInfo &&
          <Details>
            <Title>{comicInfo.title}</Title>

            <Miscelaneous>Published: {dateFormatter(comicInfo.dates[0].date)}</Miscelaneous>
            <Miscelaneous>Writer: {getWriter(comicInfo)?.join(' - ')}</Miscelaneous>

            {getPenciler(comicInfo) && <Miscelaneous>Penciler: {getPenciler(comicInfo)?.join(' - ')}</Miscelaneous>}

            {getCoverArtist(comicInfo)?.length && <Miscelaneous>Cover Artist: {getCoverArtist(comicInfo)?.join(' - ')}</Miscelaneous>}

            <Description>{comicInfo.description}</Description>
          </Details>
        }

      </Column>
    </Row>
  )
}


export default ComicInfoComponent;


