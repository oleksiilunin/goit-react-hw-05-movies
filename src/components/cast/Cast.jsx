import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'services/api';
import notFoundPoster from '../../assets/No_Photo_2.jpg';

const Cast = () => {
  const { movieId } = useParams();

  const [castData, setCastData] = useState(null);

  const ENDPOINT = `/movie/${movieId}/credits`;

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await get(ENDPOINT);
        // setTrendingMovies(data.results);
        console.log('castData', castData);

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
      <ul>
        {cast.map(({ profile_path, name, character, id }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : notFoundPoster
                }
                alt={name}
              />
              <p>{name}</p>
              <p>
                Character: <span>{character}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
