const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

const addBook = (book)=>{
    return {
        type: ADD_BOOK,
        book: book
    }
};

const removeBook = (id)=>{
    return {
        type: REMOVE_BOOK,
        id: id
    }
};

const booksReducer = (state=[], action)=>{
    switch(action.type){
        case ADD_BOOK:
            return[...state, action.book ]
        case REMOVE_BOOK:
            return state.filter(book => book.id !== action.id)
        default:
            return state;
    }
};

export default booksReducer;
export {ADD_BOOK, REMOVE_BOOK, addBook, removeBook};
