import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  // cancelAllRequests,
  get,
} from 'services/api';

import notFoundPoster from '../../assets/Movie_poster_coming_soon.jpg';
import {
  AdditionalInfoContainer,
  AdditionalInfoItem,
  AdditionalInfoLink,
  AdditionalInfoList,
  AdditionalInfoTitle,
  BackLink,
  GenresBox,
  GenresContainer,
  GenresText,
  GenresTitle,
  MainContainer,
  MovieImage,
  MovieInfoContainer,
  MovieRating,
  MovieRatingBackground,
  MovieTitle,
  MovieWrapper,
  OverviewContainer,
  OverviewText,
  OverviewTitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? './movies');
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isReviewsOpen, setIsReviewsOpen] = useState(true);
  const [isCastOpen, setIsCastOpen] = useState(true);

  const ENDPOINT = `/movie/${movieId}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await get(ENDPOINT);
        // setTrendingMovies(data.results);

        setMovieData(movieData);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    };

    fetchMovieDetails();

    // return () => {
    //   cancelAllRequests(); // Скасовує всі запити при розмонтуванні компонента
    // };
  }, [ENDPOINT]);

  const toggleInfo = event => {
    const name = event.target.name;
    if (name === 'reviews') {
      setIsReviewsOpen(prevState => !prevState);
    }
    if (name === 'cast') {
      setIsCastOpen(prevState => !prevState);
    }
  };

  // console.log(movieData);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieData;

  // console.log('location', location);
  return (
    <MainContainer>
      <BackLink to={backLinkLocationRef.current}>
        Back to the list of movies
      </BackLink>
      <MovieWrapper>
        <MovieImage
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/original' + poster_path
              : notFoundPoster
          }
          alt={title || name}
        />
        <MovieInfoContainer>
          <MovieTitle>
            {title || name} ({release_date.slice(0, 4)})
          </MovieTitle>
          <MovieRating>
            <MovieRatingBackground>
              Rating: {vote_average.toFixed(1)}
            </MovieRatingBackground>
          </MovieRating>
          <OverviewContainer>
            <OverviewTitle>Overview</OverviewTitle>
            <OverviewText>{overview}</OverviewText>
          </OverviewContainer>
          <GenresContainer>
            <GenresTitle>Genres</GenresTitle>
            <GenresBox>
              {genres.map(genre => {
                return <GenresText key={genre.id}>{genre.name}</GenresText>;
              })}
            </GenresBox>
          </GenresContainer>
        </MovieInfoContainer>
      </MovieWrapper>
      <AdditionalInfoContainer>
        <AdditionalInfoTitle>Additional info</AdditionalInfoTitle>
        <AdditionalInfoList>
          <AdditionalInfoItem>
            <AdditionalInfoLink
              name="reviews"
              to={isReviewsOpen ? 'reviews' : ''}
              onClick={toggleInfo}
            >
              Reviews
            </AdditionalInfoLink>
          </AdditionalInfoItem>
          <AdditionalInfoItem>
            <AdditionalInfoLink
              name="cast"
              to={isCastOpen ? 'cast' : ''}
              onClick={toggleInfo}
            >
              Cast
            </AdditionalInfoLink>
          </AdditionalInfoItem>
        </AdditionalInfoList>
      </AdditionalInfoContainer>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default MovieDetails;
