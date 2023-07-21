import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/home/Home'));
const Movies = lazy(() => import('../../pages/movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/movieDetails/MovieDetails')
);
const Reviews = lazy(() => import('../reviews/Reviews'));
const Cast = lazy(() => import('../cast/Cast'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movies />} />
        <Route path="movie/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
