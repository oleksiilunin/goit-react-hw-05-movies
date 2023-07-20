import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  // cancelAllRequests,
  get,
} from 'services/api';
import {
  HomeContainer,
  HomeItem,
  HomeList,
  HomeMovieTitle,
  HomeTitle,
} from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  const ENDPOINT = '/trending/all/day';

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await get(ENDPOINT);
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    };

    fetchTrendingMovies();

    // return () => {
    //   cancelAllRequests(); // Скасовує всі запити при розмонтуванні компонента
    // };
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {trendingMovies.map(({ title, id }) => {
          return (
            title && (
              <HomeItem key={id}>
                <Link to={`/movie/${id}`} state={{ from: location }}>
                  <HomeMovieTitle>{title}</HomeMovieTitle>
                </Link>
              </HomeItem>
            )
          );
        })}
      </HomeList>
    </HomeContainer>
  );
};

export default Home;
