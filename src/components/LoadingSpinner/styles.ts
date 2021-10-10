import styled, { keyframes, css } from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';

import { backgroundColor } from '../../common/theme';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const animationRule = css`
  ${animation} 1s linear infinite;
  margin: 10px;
`

export const Spinner = styled(ImSpinner2)`
animation: ${animationRule};
`;

Spinner.defaultProps = {
  'aria-label': 'loading',
}

export const LoadingBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
background-color: ${() => backgroundColor};
color: palevioletred;
font-weight: bold;
`
