import {combineReducers, createStore} from 'react-redux';
import booksReducer from './books/book';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
    book: booksReducer,
    category: categoryReducer,
});

const store = createStore(rootReducer);

export default store;
