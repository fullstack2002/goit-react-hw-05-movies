import React, { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title, HomePageWrapper, ErrorNotification } from './HomePage.styled';
import { fetchTrendingMovies } from '../../services/api';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendingMovies()

        setItems([...data])

      } catch (error) {
        setError(error)
      }
    }
    fetchMovies();
  }, [])

  const isData = items.length !== 0;

  return (
    <HomePageWrapper>
      {!error && <Title>Trending today</Title>}
      {error && <ErrorNotification>Sorry, the page is not available at the moment</ErrorNotification>}
      {isData && <MoviesList items={items} />}
    </HomePageWrapper>
  )
};

export default HomePage