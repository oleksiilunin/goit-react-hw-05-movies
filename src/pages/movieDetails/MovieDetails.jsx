import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  // cancelAllRequests,
  get,
} from 'services/api';

import notFoundPoster from '../../assets/Movie_poster_coming_soon.jpg';

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
        console.dir(movieData);

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
    console.log('EVENT>TARGET', event.target.name);
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
    <>
      <Link to={backLinkLocationRef.current}>Back to the list of movies</Link>
      <div>
        <img
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/original' + poster_path
              : notFoundPoster
          }
          alt={title || name}
        />
        <h2>
          {title || name} ({release_date.slice(0, 4)})
        </h2>
        <p>Rating: {vote_average.toFixed(1)}</p>
        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div>
          <h4>Genres</h4>
          <div>
            {genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })}
          </div>
        </div>
      </div>
      <div>
        <p>Additional info</p>
        <ul>
          <li>
            <Link
              name="reviews"
              to={isReviewsOpen ? 'reviews' : ''}
              onClick={toggleInfo}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              name="cast"
              to={isCastOpen ? 'cast' : ''}
              onClick={toggleInfo}
            >
              Cast
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
