import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Loader } from "../../components/Loader/Loader";
import { fetchMovieDetails } from '../../services/api';
import { MovieDetailsWrapper, GoBackLink, MovieDetailsLink, MovieInformation, MoviePoster, MovieInf, MovieTitle, MovieDescription, MovieDetail, MovieDetailsList } from './MovieDetails.styled';

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

  return (<MovieDetailsWrapper>
        {isData && <p>Sorry, we don`t have this movie in our library</p>}
        <GoBackLink to={backLink}>Go back</GoBackLink>
        <MovieInformation>
            <MoviePoster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Film poster" />
            <MovieInf>
                <MovieTitle>{title}</MovieTitle>
                    <p>User score: {vote_average}</p>
                <MovieDescription>Overwiev</MovieDescription>
                    <p>{overview}</p>
                <MovieDescription>Genres</MovieDescription>
                    <p>{genres.map(({name}) => `${name} `)}</p>
            </MovieInf>
        </MovieInformation>
        <MovieDetail>Additional information</MovieDetail>
        <MovieDetailsList>
            <MovieDetailsLink to="cast" state={{from: backLink}}>Cast</MovieDetailsLink>
            <MovieDetailsLink to="reviews" state={{from: backLink}}>Rewievs</MovieDetailsLink>
        </MovieDetailsList>
        <Suspense  fallback={<Loader />}>
            <Outlet />
        </Suspense>  
    </MovieDetailsWrapper>
    )

};

export default MovieDetails