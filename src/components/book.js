import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/book';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeBook(id));
  }
  return (
    <li className="book">
      <p className="book-title">{title}</p>
      <p className="author-name">
        by
        {author}
      </p>
      <button type="button" onClick={handleRemove}>remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
