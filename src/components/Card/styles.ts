import styled from 'styled-components';

import { backgroundColor } from '../../common/theme';

export const CardComponent = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ () => backgroundColor};
    `;

export const ImageFrame = styled.div`
    position: relative;
`;

export const HeroImage = styled.img`
    width: 256px;
    border-radius: 10px;
    `;

export const Name = styled.p`
    margin: 0;
    left: 5px;
    bottom: 5px;
    font-size: 16px;
    color: white;
    font-weight: bold;
    position: absolute;
`

export const Star = styled.p`
    top: 5px;
    margin: 0;
    right: 5px;
    font-size: 20px;
    color: white;
    font-weight: bold;
    position: absolute;
`