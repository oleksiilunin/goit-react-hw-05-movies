import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { get } from 'services/api';
import { toast } from 'react-toastify';
import notifyOptions from 'helpers/toastNotifyOptions';
import { FiSearch } from 'react-icons/fi';
import {
  Form,
  ButtonForm,
  Input,
  LabelButton,
  MoviesContainer,
  MoviesList,
  MoviesItem,
  MovieTitle,
} from './Movies.styled';
import NoResultCard from 'components/noResultCard/NoResultCard';
import Loader from 'components/loader/Loader';

const Movies = () => {
  const location = useLocation();
  // const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        const data = await get(ENDPOINT);
        setSearchData(data);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      } finally {
        setIsLoading(false);
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
    <MoviesContainer>
      <Form onSubmit={handleSearchMovie}>
        <Input
          type="text"
          name="query"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChangeQuery}
        />

        <ButtonForm type="submit">
          <FiSearch size={32} />
          <LabelButton>Search</LabelButton>
        </ButtonForm>
      </Form>

      {isLoading && <Loader />}

      {!isLoading && searchData?.results?.length === 0 && (
        <NoResultCard>Oops! There are no movies found...</NoResultCard>
      )}

      {!isLoading && searchData && (
        <MoviesList>
          {searchData.results.map(({ id, title }) => {
            return (
              title && (
                <MoviesItem key={id}>
                  <Link to={`/movie/${id}`} state={{ from: location }}>
                    <MovieTitle>{title}</MovieTitle>
                  </Link>
                </MoviesItem>
              )
            );
          })}
        </MoviesList>
      )}
    </MoviesContainer>
  );
};

export default Movies;
