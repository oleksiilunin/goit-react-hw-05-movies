import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { get } from 'services/api';
import { toast } from 'react-toastify';
import notifyOptions from 'helpers/toastNotifyOptions';
import { FiSearch } from 'react-icons/fi';
import NoResultCard from 'components/NoResultCard/NoResultCard';

const Movies = () => {
  const location = useLocation();
  // const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeQuery = ({ target: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const movieName = searchParams.get('movieName') ?? '';

  const ENDPOINT = `/search/movie?query=${movieName}`;

  useEffect(() => {
    const fetchSearchingMovies = async () => {
      try {
        const data = await get(ENDPOINT);
        console.log(data.results);
        setSearchData(data);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    };

    if (movieName) {
      fetchSearchingMovies();
    }

    // return () => {
    //   cancelAllRequests(); // Скасовує всі запити при розмонтуванні компонента
    // };
  }, [ENDPOINT, movieName]);

  // const updateQueryString = e => {
  //   const movieNameValue = e.target.value;
  //   if (movieNameValue === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ movieName: movieNameValue.trim() });
  // };

  const handleSearchMovie = event => {
    event.preventDefault();
    const currentInputValue = event.target.query.value;

    if (currentInputValue === '') {
      toast.info('Enter a search query', notifyOptions);
      return;
    }

    setSearchParams({ movieName: currentInputValue.trim() });

    // previousInputValue.current = currentInputValue;
  };

  return (
    <div>
      <form onSubmit={handleSearchMovie}>
        <input
          type="text"
          name="query"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChangeQuery}
        />

        <button type="submit">
          <FiSearch size={24} />
          Search
        </button>
      </form>

      {searchData?.results?.length === 0 && (
        <NoResultCard>Oops! There are no movies found...</NoResultCard>
      )}

      {searchData && (
        <ul>
          {searchData.results.map(({ id, title }) => {
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
      )}
    </div>
  );
};

export default Movies;
