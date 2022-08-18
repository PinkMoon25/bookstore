import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import booksReducer from './books/book';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  book: booksReducer,
  category: categoryReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunkMiddleware));

export default store;
