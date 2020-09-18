import styled from 'styled-components';

import { backgroundColor } from '../../common/theme';

export const CardsContainer = styled.div`
    padding: 58px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${ () => backgroundColor};
`;

export const NoComicFound = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;