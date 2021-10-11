import styled from 'styled-components';

import { textColor, backgroundColor } from '../../common/theme';

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${() => backgroundColor};
`;

export const TitleContainer = styled.p`
  display: flex;
  font-size: 2em;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-top: 20px;
  color:${() => textColor};
`;