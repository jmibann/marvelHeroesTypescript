import React, { useContext, useState } from 'react'

import { InputContext } from '../../../context';
import { HERO_ID_PREFIX } from '../../../utils';

import { SearchBar, Separator, Input, MagnifierContainer } from './styles';

const COMIC_QUERY = 'https://www.marvel.com/comics/issue/'

const getComicId = (str: string): string => {
  let result = str.slice(COMIC_QUERY.length).split('/').shift();
  return (result as string)
}


const SearchBarComponent: React.FC = () => {
  const [favList, setFavList] = useState<(string | null)[]>([]);
  const { input, setInput, setInputComic } = useContext(InputContext);

  const myStorage: Storage = window.localStorage;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.includes(COMIC_QUERY)) {
      setInputComic(getComicId(e.target.value));
      setInput(e.target.value);
      return;
    } else {
      setInputComic('');
      setInput(e.target.value);
      return;
    }
  }

  const onPasteHandler = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    let pastedURL: string = e.clipboardData.getData('Text');

    if (pastedURL.includes(COMIC_QUERY)) {
      setInputComic(getComicId(pastedURL));
    };
    return
  }

  const getFavList = () => {
    let keys = Object.keys(myStorage);
    keys = keys.filter(key => key.startsWith(HERO_ID_PREFIX));

    setFavList(keys.map(key => myStorage.getItem(key)).sort());
  }

  return (
    <SearchBar>
      <Separator />

      <MagnifierContainer>
        <i className="fas fa-search" style={{ color: "#A8A8A8" }}></i>
      </MagnifierContainer>

      <Input
        placeholder="Search"
        value={input}
        type="text"
        textColor="black"
        list="favourites"
        onChange={onChange}
        onPaste={onPasteHandler}
        onFocus={getFavList}
      >
      </Input>

      <datalist id='favourites'>
        {
          favList.length
            ? favList.map(fav => <option key={fav} value={fav as string}>{fav}</option>)
            : null
        }
      </datalist>

      <MagnifierContainer>
        <i className="far fa-star" style={{ color: "#A8A8A8" }}></i>
      </MagnifierContainer>

      <Separator />
    </SearchBar>
  )
}

export default SearchBarComponent;