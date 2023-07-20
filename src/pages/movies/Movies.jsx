import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { get } from 'services/api';
import { toast } from 'react-toastify';
import notifyOptions from 'helpers/toastNotifyOptions';
import { FiSearch } from 'react-icons/fi';
import NoResultCard from 'components/NoResultCard/NoResultCard';
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

      {searchData?.results?.length === 0 && (
        <NoResultCard>Oops! There are no movies found...</NoResultCard>
      )}

      {searchData && (
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
