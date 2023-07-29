// src/components/EditBookForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../actions/bookActions';

const EditBookForm = ({ book, onClose }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [language, setLanguage] = useState(book.language);
  const [year, setYear] = useState(book.year);
  const [pages, setPages] = useState(book.pages);

  const dispatch = useDispatch();

  const handleEditBook = () => {
    const updatedBook = {
      title,
      author,
      language,
      year,
      pages,
    };
    dispatch(editBook(book.id, updatedBook));
    onClose();
  };

  return (
    <div>
      <h3>Edit Book</h3>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Language:</label>
          <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <label>Pages:</label>
          <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} />
        </div>
        <button type="button" onClick={handleEditBook}>
          Save
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditBookForm;
