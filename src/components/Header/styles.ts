import styled from 'styled-components';

import {backgroundColor} from '../../common/theme';

export const HeaderContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom-style: solid;
border-color: #A8A8A8;
border-width: 2px;
background-color: ${ () => backgroundColor};
`