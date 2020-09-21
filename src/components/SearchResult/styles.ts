import styled from 'styled-components';

import { backgroundColor, textColor } from '../../common/theme';

export const TitleContainer = styled.p`
  display: flex;
  font-size: 2em;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-top: 20px;
  background-color: ${() => backgroundColor};
  color:${() => textColor};
`;