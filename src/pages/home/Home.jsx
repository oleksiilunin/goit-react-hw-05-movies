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
import Loader from 'components/loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const ENDPOINT = '/trending/all/day';

  useEffect(() => {
    setIsLoading(true);
    const fetchTrendingMovies = async () => {
      try {
        const data = await get(ENDPOINT);
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      } finally {
        setIsLoading(false);
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
      {isLoading && <Loader />}

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
