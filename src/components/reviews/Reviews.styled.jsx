import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 12px;
  /* width: 100%; */
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 12px;
  padding: 16px;

  border-radius: 16px;

  background-color: #ececec;
  box-shadow: rgb(125, 123, 131) -5px 5px 15px, rgb(255, 255, 255) 5px 5px 15px;
`;

export const ReviewsTitle = styled.h4``;
export const ReviewsTitleSpan = styled.span`
  font-weight: 900;
  font-size: 20px;
`;
