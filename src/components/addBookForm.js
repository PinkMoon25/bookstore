import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookData } from '../redux/books/book';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title: e.target.elements.bookTitle.value,
      author: e.target.elements.authorName.value,
      category: 'none',
    };
    dispatch(addBookData(book));
    e.target.elements.bookTitle.value = '';
    e.target.elements.authorName.value = '';
  };

  return (
    <section className="form-section">
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="bookTitle" placeholder="Book title" required />
        <input type="text" name="authorName" placeholder="Author name" required />
        <button type="submit"> Add </button>
      </form>
    </section>
  );
};

export default AddBook;
