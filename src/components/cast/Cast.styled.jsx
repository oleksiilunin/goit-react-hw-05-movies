import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 12px;
  /* width: 100%; */
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  /* align-items: center; */
  /* gap: 16px; */
  width: calc((100% - 40px) / 4);
  min-height: 480px;

  border-radius: 16px;

  background-color: #ececec;
  box-shadow: rgb(125, 123, 131) -5px 5px 15px, rgb(255, 255, 255) 5px 5px 15px;
`;

export const CastImg = styled.img`
  min-height: 420px;
  object-fit: cover;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;

  /* height: 100%; */
  /* width: calc((100% - 40px) / 5); */
`;

export const CastInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 8px;
  padding: 8px;

  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;
export const CastInfoText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #5b5c6c;
`;

export const CastInfoSpan = styled.span`
  font-style: italic;
  font-weight: 400;
`;
