import styled from 'styled-components';

export const CardComponent = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const ImageFrame = styled.div`
    filter: drop-shadow(0 0 0.4rem black);
    position: relative;
    transition: transform .2s;
    &:hover {
        transform: scale(1.1);
`;

export const HeroImage = styled.img`
    width: 256px;
    border-radius: 10px;
    cursor: pointer;
    `;

export const Name = styled.p`
    margin: 0;
    left: 5px;
    bottom: 5px;
    font-size: 16px;
    color: white;
    font-weight: bold;
    position: absolute;
    cursor: pointer;
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