import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const books = [
  {
    title: 'Animal farms',
    author: 'George Orwell',
    id: uuidv4(),
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    id: uuidv4(),
  },
  {
    title: 'Harry Potter',
    author: 'JK Rowling',
    id: uuidv4(),
  },
];

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = books, action) => {
  const index = state.findIndex((book) => action.id === book.id);
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:

      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};

export default booksReducer;
export { addBook, removeBook };
