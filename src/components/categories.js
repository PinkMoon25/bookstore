import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <div className="category-section">
      <p>{category}</p>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}> check status </button>
    </div>
  );
};

export default Categories;
