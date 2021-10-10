import React from 'react';
import { EmptyDiv, Button } from './styles';

interface Props {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonContainer: React.FC<Props> = ({ currentTheme, setCurrentTheme }) => {

  const toogleTheme = () => {
    (currentTheme === 'light') ? setCurrentTheme('dark') : setCurrentTheme('light')
  }

  const switchTo = () => {
    return currentTheme === 'light' ? 'Dark Mode' : 'Light Mode';
  }

  return (
    <div>
      <EmptyDiv>
        <Button onClick={toogleTheme}>{switchTo()}</Button>
      </EmptyDiv>
    </div>
  )
}

export default ButtonContainer;