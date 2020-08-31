
import styled from "styled-components";

import { backgroundColor } from '../../../common/theme';

export const SearchBar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 50px;
background-color: ${ () => backgroundColor};
`;

export const Separator = styled.div`
height: 35px;
width: 2px;
background-color: #A8A8A8
`;

interface InputProps {
  textColor: string;
};

export const Input = styled.input<InputProps>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.textColor || "palevioletred"};
  background: white;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  width: 100%;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
  }
  :-ms-input-placeholder {
    color: grey;
  }
`;

export const MagnifierContainer = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;
