import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import { lazy } from 'react';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Description from './Description';
// import Screenshots from './Screenshots';

const Home = lazy(() => import('../../pages/home/Home'));
const Movies = lazy(() => import('../../pages/movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/movieDetails/MovieDetails')
);
const Reviews = lazy(() => import('../reviews/Reviews'));
const Cast = lazy(() => import('../cast/Cast'));
//Для того, чтобы работала ленивая загрузка(lazy) c модулем с именованным импортом, то необходимо делать как показано ниже
// const Screenshots = lazy(() => import('./Screenshots')).then({
//   ...module,
//   default: module.Screenshots,
// });

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
}
