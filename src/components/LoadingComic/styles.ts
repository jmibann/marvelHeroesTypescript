import styled from 'styled-components';

export const TextLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 521px;
  margin-top: 58px;
  span {
      display:flex;
      width: 100%;
  }
  @media only screen and (max-width: 768px){
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    
`;

export const TitleLabelContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 30px 0 30px 0;
`;

export const SubTitleLabelContainer = styled.div`
  display: flex;
  width: 40%;
  margin: 5px 0 5px 0;
`;

export const SubTextLabelContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 5px 0 5px 0;
`;
