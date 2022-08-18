import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookData } from '../redux/books/book';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeBookData(id));
  }
  return (
    <li className="book">
      <div>
        <p className="book-title">{title}</p>
        <p className="author-name">
          {' '}
          by&nbsp;
          {author}
        </p>
        <button type="button" onClick={handleRemove}>remove</button>
      </div>
      <span className="book-progress">
        <span className="circle" />
        100%
      </span>
      <span className="book-chapter">
        <p>current chapter</p>
        <p className="chapter">Chapter 10</p>
        <button type="button">Update Progress</button>
      </span>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
