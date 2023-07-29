// src/actions/bookActions.js
import { SEARCH_BOOKS, ADD_TO_BOOKS_LIST, ADD_BOOK, EDIT_BOOK } from './types';
import axios from 'axios';

// Fetch books from the API based on search term
export const searchBooks = (searchTerm) => async (dispatch) => {
  try {
    const response = await axios.get(`http://68.178.162.203:8080/application-test-v1.1/books`);
    const filteredResults = response.data.data.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch({
      type: SEARCH_BOOKS,
      payload: filteredResults,
    });
  } catch (error) {
    console.error('Error searching for books:', error);
  }
};

// Action to add a book to the books list
export const addToBooksList = (book) => ({
  type: ADD_TO_BOOKS_LIST,
  payload: book,
});

// Action to add a new book to the database
export const addBook = (newBook) => async (dispatch) => {
  try {
    const response = await axios.post('http://68.178.162.203:8080/application-test-v1.1/books', newBook);
    dispatch({
      type: ADD_BOOK,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error adding book:', error);
  }
};

// Action to edit book details in the database
export const editBook = (bookId, updatedBook) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://68.178.162.203:8080/application-test-v1.1/books/${bookId}`,
      updatedBook
    );
    dispatch({
      type: EDIT_BOOK,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error editing book:', error);
  }
};
