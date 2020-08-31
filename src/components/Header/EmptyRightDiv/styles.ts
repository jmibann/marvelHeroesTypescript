import styled from 'styled-components';

import { textColor } from '../../../common/theme';

export const EmptyDiv = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 25px;
  font-weight: bold;
  color:${ () => textColor};
  border-color: rgb(255, 23, 37);
  background-color: rgb(255, 23, 37);
`