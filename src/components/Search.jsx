import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  
   return <form onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            type="text"
            name='searchInput'
            value={searchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
        />
        <button type="submit">
            Search
        </button>
    </form>
}

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}