// src/App.js
import React from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="container"> {/* Add a container class */}
      <h1>Book Search App</h1>
      <SearchBar />
      <ResultsList />
    </div>
  );
};

export default App;
