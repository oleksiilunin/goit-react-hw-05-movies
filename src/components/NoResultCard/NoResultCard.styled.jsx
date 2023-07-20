import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin: 5vh auto;
`;

export const CardText = styled.h2`
  max-width: 80%;
  color: #5b5c6c;

  font-size: 36px;
  text-align: center;
`;

export const CardImage = styled.img`
  max-width: 40vw;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin-bottom: 24px;
  border-radius: 8px;
`;
