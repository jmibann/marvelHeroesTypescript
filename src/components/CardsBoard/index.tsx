import React, { useState } from 'react';
import { Row, Column } from '../../common';

import { CardsContainer, NoComicFound } from './styles';

import Card from '../Card/';
import Modal from '../Modal';
import ComicReview from '../ComicReview';

const CardsBoard = ({ heroes }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHero(null);
  }

  const onClick = (selectedHero) => {
    setSelectedHero(selectedHero);
    openModal();
  }

  return (
    <CardsContainer>
      <Row>
        {isModalOpen && (
          <Modal id="modal" isOpen={isModalOpen} onClose={closeModal} title={selectedHero.name}>
            {
              selectedHero.comics && selectedHero.comics.length
                ? selectedHero.comics.map((comic, idx) => <ComicReview comic={comic} key={`${idx} - ${comic.title}`} />)
                : <NoComicFound> <h2>No comic found</h2> </NoComicFound>
            }
          </Modal>
        )}
        {
          heroes.map(hero =>
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