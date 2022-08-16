import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import AddBook from './addBookForm';

const BookList = () => {
  const bookCollection = useSelector((state) => state.book);
  return (
    <>
      <ul className="book-list">
        {bookCollection.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default BookList;
