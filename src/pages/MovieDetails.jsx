import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation, NavLink } from 'react-router-dom';
import { Loader } from "../components/Loader";
import { fetchMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      setError(null)
      setState(null)

      try {
        const data = await fetchMovieDetails(movieId)

        setState(data)

      } catch (error) {
        setError(error)
      }
    }
    fetchMovie();
  }, [movieId])

  if (!state) return null
    
  const { poster_path, title, vote_average, overview, genres } = state;
  const isData = error || !state;
  const backLink = location.state?.from ?? '/movies';

  return (<div>
        {isData && <p>Oops! Something went wrong :( Please, choose another movie</p>}
        <NavLink to={backLink}>Go back</NavLink>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Film poster" />
            <div>
                <h1>{title}</h1>
                    <p>User score: {vote_average}</p>
                <h2>Overwiev</h2>
                    <p>{overview}</p>
                <h2>Genres</h2>
                    <p>{genres.map(({name}) => `${name} `)}</p>
            </div>
        </div>
        <h3>Additional information</h3>
        <ul>
            <NavLink to="cast" state={{from: backLink}}>Cast</NavLink>
            <NavLink to="reviews" state={{from: backLink}}>Rewievs</NavLink>
        </ul>
        <Suspense  fallback={<Loader />}>
            <Outlet />
        </Suspense>  
    </div>
    )

};

export default MovieDetails