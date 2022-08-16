import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/book';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  book: booksReducer,
  category: categoryReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
