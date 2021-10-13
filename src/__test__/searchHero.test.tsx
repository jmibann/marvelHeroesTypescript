import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from '../App';

const HERO = 'spider';

test('Search for heroes: Types an input and loads placeholders', () => {
  render(<App />);

  screen.getAllByLabelText(/loading card/i);

  userEvent.type(screen.getByPlaceholderText(/search/i), HERO)

  const loadingCards = screen.getAllByLabelText(/loading card/i);
  expect(loadingCards.length).toBe(8);
});

test('Search for heroes: Types an input and loads heroes', async () => {
  render(<App />);

  userEvent.type(screen.getByPlaceholderText(/search/i), HERO)

  const loadingCards = await screen.findAllByLabelText(/hero card/i);

  expect(loadingCards.length).toBeGreaterThan(0);
});


test('Search for heroes: Types a non existing heroe', async () => {
  render(<App />);

  userEvent.type(screen.getByPlaceholderText(/search/i), 'zyzyzyzy')

  const NotFoundText = await screen.findByText(/no hero found/i);

  expect(NotFoundText.textContent?.toLowerCase()).toBe('no hero found');
});