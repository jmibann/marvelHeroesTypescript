import React from 'react';

interface Input {
  search: string;
}

const input: Input = {
  search: ''
}

export const InputContext = React.createContext({
  input: input.search,
  setInput: (str: string) => { },
  setInputComic: (str: string) => { }
})