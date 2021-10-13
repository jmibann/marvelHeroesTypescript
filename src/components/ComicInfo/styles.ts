import styled from 'styled-components';

import { textColor } from '../../common/theme';

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 74px;
  padding-right: 74px;
  padding-top: 58px;
  `;

export const Image = styled.img`
  border-radious: 10px;
  width: 100%;
  width: 339px;
  height: 521px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 58px;
  color: ${() => textColor};

  @media only screen and (max-width: 768px){
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
`;

export const Miscelaneous = styled.p`
font-size: 20px;
font-weight: bold;
margin: 5px 0 5px 0px;
`;

export const Description = styled.p`
  font-size: 20px;
  max-width: 500px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;