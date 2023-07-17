import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { cancelAllRequests, get } from 'services/api';

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
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(({ title, id }) => {
          return (
            title && (
              <li key={id}>
                <Link to={`/movie/${id}`} state={{ from: location }}>
                  <h3>{title}</h3>
                </Link>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
