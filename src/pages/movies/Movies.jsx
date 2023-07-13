import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
    'movie-6',
  ]);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId') ?? '';

  // useEffect(() => {
  //   return () => {};
  // }, []);
  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
    // const nextParams = movieId !== '' ? { movieId } : {};
    // setSearchParams(nextParams);
  };

  // TODO: для фильтрации использовать useMemo. ???

  const visibleMovies = movies.filter(movie =>
    movie.toLowerCase().includes(movieId.toLowerCase())
  );
  console.log(location);

  return (
    <div>
      Movies
      <input type="text" value={movieId} onChange={updateQueryString} />
      <button onClick={() => setSearchParams({ h: 'hello' })}>
        Change search params
      </button>
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
