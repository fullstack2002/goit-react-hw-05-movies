import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm, SearchFormInput, SearchFormButton } from './Search.styled';

export const Search = ({ value, onSubmit }) => {
  const [searchInput, setSearchInput] = useState(value);

   const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (searchInput.trim() === '') {
            toast("Enter your search query :)");
        }
        onSubmit(searchInput.trim())
  }
  
   return <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
            onChange={handleChange}
            type="text"
            name='searchInput'
            value={searchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
        />
        <SearchFormButton type="submit">
            Search
        </SearchFormButton>
    </SearchForm>
}

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}