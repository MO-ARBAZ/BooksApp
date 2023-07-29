// src/components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../actions/bookActions';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchBooks(searchTerm));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
