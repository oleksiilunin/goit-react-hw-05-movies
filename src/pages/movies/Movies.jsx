import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { get } from 'services/api';
import { toast } from 'react-toastify';
import notifyOptions from 'helpers/toastNotifyOptions';
import { FiSearch } from 'react-icons/fi';

const Movies = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchData, setSearchData] = useState(null);
  const previousInputValue = useRef('');

  const movieName = searchParams.get('movieName') ?? '';

  const ENDPOINT = `/search/movie?query=${movieName}`;

  console.log('MOVIE_NAME >>>', movieName);

  const fetchSearchingMovies = async () => {
    try {
      const data = await get(ENDPOINT, page);
      console.log(data.results);
      setSearchData(data);
    } catch (error) {
      console.error('Помилка при виконанні запиту:', error);
    }
  };

  useEffect(() => {
    if (movieName) {
      fetchSearchingMovies();
    }

    // return () => {
    //   cancelAllRequests(); // Скасовує всі запити при розмонтуванні компонента
    // };
  }, []);

  const updateQueryString = e => {
    const movieNameValue = e.target.value;
    if (movieNameValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieName: movieNameValue.trim() });
  };

  const handleSearchMovie = event => {
    event.preventDefault();
    const currentInputValue = event.target.query.value;
    console.log('currentInputValue>>>>>>', currentInputValue);

    if (movieName === '') {
      toast.info('Enter a search query', notifyOptions);
      return;
    }
    if (currentInputValue === previousInputValue.current) {
      return;
    }

    fetchSearchingMovies();

    previousInputValue.current = currentInputValue;
  };

  return (
    <div>
      <form onSubmit={handleSearchMovie}>
        <input
          type="text"
          name="query"
          value={movieName}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={updateQueryString}
        />

        <button type="submit">
          <FiSearch size={24} />
          Search
        </button>
      </form>

      <ul>
        {searchData &&
          searchData.results.map(({ id, title }) => {
            return (
              title && (
                <li key={id}>
                  <Link to={`/movie/${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
