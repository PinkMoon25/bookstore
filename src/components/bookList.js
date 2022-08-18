import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import AddBook from './addBookForm';
import { fetchBooks } from '../redux/books/book';

const BookList = () => {
  const bookCollection = useSelector((state) => state.book);
  const booksIds = Object.keys(bookCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, []);

  return (
    <>
      <ul className="book-list">
        {booksIds.map((bookid) => (
          <Book
            key={bookid}
            title={bookCollection[bookid][0].title}
            author={bookCollection[bookid][0].author}
            id={bookid}
          />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default BookList;
