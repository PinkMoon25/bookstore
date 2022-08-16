import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/book';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title: e.target.elements.bookTitle.value,
      author: e.target.elements.authorName.value,
      id: uuidv4(),
    };
    dispatch(addBook(book));
    e.target.elements.bookTitle.value = '';
    e.target.elements.authorName.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="bookTitle" placeholder="Book title" required />
      <input type="text" name="authorName" placeholder="Author name" required />
      <button type="submit"> Add </button>
    </form>
  );
};

export default AddBook;
