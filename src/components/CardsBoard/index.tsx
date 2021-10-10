import React, { useState } from 'react';
import { Row, Column } from '../../common';

import { CardsContainer, NoComicFound } from './styles';
import { Card, Modal, ComicReview } from '../../components';

import { HeroType } from '../../App';

type CardsBoardProps = {
  heroes: {
    read: () => HeroType[] | Promise<HeroType[]>;
  }
}

const CardsBoard: React.FC<CardsBoardProps> = ({ heroes }) => {
  const heroesList = heroes.read() as HeroType[];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedHero, setSelectedHero] = useState<(HeroType)>();
  const [isEmptyComicList, setIsEmptyComicList] = useState<boolean>(true);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHero(undefined);
  }

  const onClick = (selectedHero: (HeroType)) => {
    setSelectedHero(selectedHero);
    setIsEmptyComicList(selectedHero.comics.length ? true : false);
    openModal();
  }

  const modalBodyChildren = (): React.ReactNode => {

    if (isEmptyComicList) {
      return selectedHero?.comics?.map((comic, idx) => <ComicReview comic={comic} key={`${idx} - ${comic.name}`} />)
    } else {
      return <NoComicFound> <h2>No comic found</h2> </NoComicFound>
    }
  }

  return (
    <CardsContainer>
      <Row>
        {isModalOpen && (
          <Modal id="modal" isOpen={isModalOpen} onClose={closeModal} title={selectedHero?.name}>
            {modalBodyChildren()}
          </Modal>
        )}
        {
          heroesList && heroesList.map(hero =>
            <Column xs='12' sm='6' md='4' lg='3' key={hero.id}>
              <Card hero={hero} onClick={onClick} />
            </Column>
          )
        }
      </Row>
    </CardsContainer >
  )
}

export default CardsBoard;