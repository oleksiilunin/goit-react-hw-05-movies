import React, { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? './movies');
  const { movieId } = useParams();
  // useEffect(() => {
  //   return () => {};
  // }, []);
  console.log(location);
  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Back to the list of movies</Link>
      <ul>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
