import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
`;

export const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 30vw;
  border-radius: 8px;
  border: 1px solid #cececf;

  background-color: #fffd8c;
  color: #5b5c6c;

  font-size: 20px;
  font-weight: 700;

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    background-color: #f5f379;
    /* background-color: #45e2a6; */
  }

  &:active {
    background-color: #45e2a6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 2px transparent #45e2a6;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 24px;
  /* padding: 24px 0; */
`;

export const MovieImage = styled.img`
  max-width: 30%;
  width: 100%;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MovieTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
`;

export const MovieRating = styled.p`
  color: #5b5c6c;

  font-size: 20px;
  font-weight: 600;
`;

export const MovieRatingBackground = styled.span`
  display: inline-block;
  padding: 8px;

  border-radius: 8px;

  background-color: #45e2a6;
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OverviewTitle = styled.h3`
  font-size: 20px;
`;

export const OverviewText = styled.p`
  /* color: #5b5c6c; */
  font-size: 18px;
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GenresTitle = styled.h4`
  font-size: 18px;
`;

export const GenresBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const GenresText = styled.p`
  /* color: #5b5c6c; */
  padding: 2px;
  border-radius: 4px;

  background-color: #d3d3d3;

  font-size: 16px;
  font-weight: 600;
`;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AdditionalInfoTitle = styled.h4`
  font-size: 18px;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const AdditionalInfoItem = styled.li`
  display: flex;
  gap: 16px;
`;

export const AdditionalInfoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  border-radius: 8px;
  /* border: 1px solid #cececf; */

  background-color: #d3d3d3;
  color: #5b5c6c;

  font-size: 20px;
  font-weight: 700;

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* background-color: #45e2a6; */
  }

  &.active {
    background-color: #45e2a6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* border: 2px transparent #33c4c4; */
  }
`;
