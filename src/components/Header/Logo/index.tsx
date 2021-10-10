import React, { useContext } from 'react';

import marvelLogo from './Marvel.png';
import { LogoContainer, LogoImage } from './styles';

import { InputContext } from '../../../context';

const Logo: React.FC<{}> = () => {

  const { setInput } = useContext(InputContext);

  return (
    <LogoContainer onClick={() => setInput('')}>
      <LogoImage src={marvelLogo} />
    </LogoContainer>
  )
}

export default Logo;