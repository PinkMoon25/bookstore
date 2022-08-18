const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nxsm1kVGIfpXEwgiipul/books/';
const FETCH_BOOKS_DATA = 'FETCH_BOOKS_DATA';

async function fetchBooks(dispatch) {
  try {
    const response = await fetch(apiUrl).then((res) => res.json());
    dispatch({ type: FETCH_BOOKS_DATA, payload: response });
  } catch (error) {
    console.log(error);
  }
}

function addBookData(book) {
  return async (dispatch) => {
    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    dispatch(fetchBooks);
  };
}

const books = [];

function removeBookData(id) {
  return async (dispatch) => {
    await fetch(`${apiUrl}${id}`, {
      method: 'DELETE',
    });
    dispatch(fetchBooks);
  };
}

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case FETCH_BOOKS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
export { addBookData, removeBookData, fetchBooks };
