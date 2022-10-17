import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieListLink, MovieLink } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ items }) => {
  const location = useLocation();

  return <MovieListLink>
        {items?.map(({id, title, name}) => <li key={id}>
                <MovieLink to={`/movies/${id}`} state={{from: location}}>{title || name}</MovieLink>
            </li>
        )}
    </MovieListLink>
}

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
        title: PropTypes.string,
        name: PropTypes.string,
        }
    )),
}