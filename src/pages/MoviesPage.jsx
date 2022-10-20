import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchSearchData } from '../services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Search } from 'components/Search/Search';
import { HomePageWrapper, ErrorNotification } from '../pages/HomePage/HomePage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const paramSearch = searchParams.get('query') ?? '';

  const changeQuery = value => {
    setSearchParams(value !== '' ? {query: value } : {})
  }

  useEffect(() => {
    if (paramSearch === '') {
      return
    }

  const fetchMovies = async () => {
    setLoading(true)

    try {
      const data = await fetchSearchData(paramSearch)

      if (data.length === 0) {
        setMovies([])
        return toast(`Sorry, we hadn't found movies for "${paramSearch}", please, enter another query :)`)
      }

      setMovies([...data])

    } catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }
    fetchMovies();
  }, [paramSearch])

  const isData = movies.length > 0;

  return (
    <HomePageWrapper>
      <Search onSubmit={changeQuery} value={paramSearch} />
      {loading && <Loader />}
      {error && <ErrorNotification>Sorry, we don`t have this movie in our library</ErrorNotification>}
      {isData && <MoviesList items={movies} />}
    </HomePageWrapper>
  )
}

export default MoviesPage