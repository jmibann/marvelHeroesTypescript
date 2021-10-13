import styled from 'styled-components';

import { textColor } from '../../common/theme';

export const ErrorMessage = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${() => textColor};
  `;