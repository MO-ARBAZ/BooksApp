// src/reducers/bookReducer.js
import { SEARCH_BOOKS, ADD_TO_BOOKS_LIST, ADD_BOOK, EDIT_BOOK } from '../actions/types';

const initialState = {
  searchResults: [],
  booksList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case ADD_TO_BOOKS_LIST:
      return {
        ...state,
        booksList: [...state.booksList, action.payload],
      };
    case ADD_BOOK:
      return {
        ...state,
        booksList: [...state.booksList, action.payload],
      };
    case EDIT_BOOK:
      // Implement the logic to edit the book details in the booksList array
      return state;
    default:
      return state;
  }
};

export default bookReducer;
