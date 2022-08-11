import React from "react";
import Book from "./book"
import AddBook from "./addBookForm";

const BookList = ()=>{
    const bookCollection = [
        {
            id: 1,
            title: "Animal Farms",
            author: "George Orwell",
        },

        {
            id: 2,
            title: "Eloquent JavaScript",
            author: "Marijn Haverbeke",
        },

        {
            id: 3,
            title: "Linux Kernel",
            author: "Linus Torvalds",
        }
    ]
    return(
        <>
        <ul className="book-list">
            {bookCollection.map(book=>
                <Book key={book.id} title={book.title} author={book.author}/>
            )}
        </ul>
        <AddBook />
        </>
    )
};

export default BookList;
