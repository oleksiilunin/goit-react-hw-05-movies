import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'services/api';
import notFoundPoster from '../../assets/No_photo.png';
import {
  CastImg,
  CastInfoBox,
  CastInfoSpan,
  CastInfoText,
  CastItem,
  CastList,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [castData, setCastData] = useState(null);

  const ENDPOINT = `/movie/${movieId}/credits`;

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await get(ENDPOINT);
        // setTrendingMovies(data.results);

        setCastData(castData);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    };

    fetchCast();

    // return () => {
    //   cancelAllRequests(); // Скасовує всі запити при розмонтуванні компонента
    // };
  }, [ENDPOINT]);

  if (!castData) {
    return <div>Loading...</div>;
  }

  const { cast } = castData;
  return (
    <>
      <CastList>
        {cast.map(({ profile_path, name, character, id }) => {
          return (
            <CastItem key={id}>
              <CastImg
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : notFoundPoster
                }
                alt={name}
              />
              <CastInfoBox>
                <CastInfoText>{name}</CastInfoText>
                <CastInfoText>
                  <CastInfoSpan>Character: </CastInfoSpan>
                  {character}
                </CastInfoText>
              </CastInfoBox>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
