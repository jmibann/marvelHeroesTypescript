import styled from 'styled-components';

import { backgroundColor } from './common/theme';

export const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${() => backgroundColor};
  height: 100vh;
`;