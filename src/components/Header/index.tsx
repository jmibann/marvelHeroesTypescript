import React from 'react';
import { HeaderContainer } from './styles';

import Logo from './Logo';
import SearchBarComponent from './SearchBar';
import EmptyRigthDiv from './EmptyRightDiv';

interface Props {
  currentTheme: string;
  setCurrentTheme : React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<Props> = ({ currentTheme, setCurrentTheme }) => {

  return (
    <HeaderContainer>
      <Logo />
      <SearchBarComponent />
      <EmptyRigthDiv currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
    </HeaderContainer>
  )
}

export default Header;
