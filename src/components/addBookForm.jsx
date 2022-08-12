import React from "react";

const AddBook = ()=>{
    return(
        <form>
            <input type="text" name="input-book" placeholder="Add Book" required/>
            <input type="text" name="input-author" placeholder="Author name" required/>
            <button type="submit"> Add </button>
        </form>
    )
};

export default AddBook;
