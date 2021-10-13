import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';

const COMIC = 'https://www.marvel.com/comics/issue/70718/the_amazing_spider-man_2018_22';

test('Search for comics: Types an input and loads placeholders', () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: COMIC } })

  const loadingComicTitle = screen.getByLabelText(/loading comic/i);
  expect(loadingComicTitle).toBeInTheDocument();
});

test('Search for comic: Types a comic address and loads comic', async () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: COMIC } })

  const loadedComic = await screen.findByText(/the amazing spider/i);

  expect(loadedComic).toBeInTheDocument();
});


test('Search for comic: Types a non existing comic', async () => {
  render(<App />);
  const MESSAGE = "there's a problem. please verify the address is correct.";
  const BAD_COMIC = 'https://www.marvel.com/comics/issue/9999999';

  fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: BAD_COMIC } })

  const result = await screen.findByText(/a problem/i);

  expect(result.textContent?.toLowerCase()).toBe(MESSAGE);
});