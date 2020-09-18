import styled from "styled-components";

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 210px;
`;

export const PreviewImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const TitleDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  padding: 10px;
  height: 210px;
`;

export const Title = styled.p`
max-width: 90%;
font-size: 16px;
font-weight: bold;
white-space: normal;
overflow: hidden;
text-overflow: ellipsis;
`;

export const Description = styled.p`
max-width: 90%;
white-space: normal;
overflow: hidden;
text-overflow: ellipsis;
margin-top: 0;
margin-bottom: 0;
`;