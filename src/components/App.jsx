import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const Error = lazy(() => import('./Error/Error'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />} />
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
          <Route path='*' element={<Error />} />
        </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000}/>
    </div>
  )
};