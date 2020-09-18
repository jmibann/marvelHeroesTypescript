import React, { useState } from 'react';
import { Row, Column } from '../../common';

import { CardsContainer, NoComicFound } from './styles';

import Card from '../Card/';
import Modal from '../Modal';
import ComicReview from '../ComicReview';

import {Hero} from '../../App'; 

interface Props {
  heroes: Array<Hero>
}

const CardsBoard: React.FC<Props> = ({ heroes }) => {
  const [isEmptyComicList, setIsEmptyComicList] = useState<boolean>(true);
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHero(undefined);
  }

  const onClick = (selectedHero: Hero) => {
    setSelectedHero(selectedHero);
    setIsEmptyComicList(selectedHero.comics.length ? true : false);
    openModal();
  }

  const modalBodyChildren = () : React.ReactNode => {
    if (isEmptyComicList){
      return <NoComicFound> <h2>No comic found</h2> </NoComicFound>
    }else {
      return (selectedHero as Hero).comics.map((comic, idx) => <ComicReview comic={comic} key={`${idx} - ${comic.name}`} />)
    }
  }

  return (
    <CardsContainer>
      <Row>
        {isModalOpen && (
          <Modal id="modal" isOpen={isModalOpen} onClose={closeModal} title={selectedHero && selectedHero.name}>
            {modalBodyChildren()}
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