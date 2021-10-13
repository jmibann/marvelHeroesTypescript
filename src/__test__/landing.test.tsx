import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders Landing Page: 8 loading placeholders', () => {
  render(<App />);

  const loadingCards = screen.getAllByLabelText(/loading card/i);
  expect(loadingCards.length).toBe(8);
});

test('Renders Landing Page: 8 heroes', async () => {
  render(<App />);

  const heroCards = await screen.findAllByLabelText(/hero card/i);
  expect(heroCards.length).toBe(8);
});