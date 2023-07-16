import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { cancelAllRequests, get } from 'services/api';

const ENDPOINT = '/trending/all/day';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();
  // const navigate = useNavigate();

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

  // const handleClick = id => {
  //   id && navigate(`/movie/${id}`);
  //   console.log(id);
  // };

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(({ title, name, id }) => {
          return (
            (title || name) && (
              <li key={id}>
                <Link
                  to={`/movie/${id}`}
                  state={{ from: location }}
                  // onClick={() => handleClick(id)}
                >
                  <h3>{title || name}</h3>
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
