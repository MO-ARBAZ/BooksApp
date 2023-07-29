// src/components/ResultsList.js
import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

const ResultsList = () => {
  const searchResults = useSelector((state) => state.books.searchResults);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState('asc');

  // Calculate total number of pages
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  // Get the current page of items based on pagination
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchResults.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, searchResults]);

  // Handle sorting of items by title
  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Sort items based on title and sortOrder
  const sortedItems = useMemo(() => {
    return currentItems.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (sortOrder === 'asc') {
        return titleA.localeCompare(titleB);
      } else {
        return titleB.localeCompare(titleA);
      }
    });
  }, [currentItems, sortOrder]);

  return (
    <div>
      {sortedItems.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          {/* Display other book details as needed */}
          <button>Add to Books List</button>
          
        </div>
      ))}

      <div>
        
        <br/>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
        <span>{ "  " + currentPage + "  "}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
        <span>{ " " +  " " +  " "}</span> 
        <br/>
        <br/>
        <button onClick={handleSort}>Sort by Title {sortOrder === 'asc' ? '▲' : '▼'}</button>
      </div>
    </div>
  );
};

export default ResultsList;
