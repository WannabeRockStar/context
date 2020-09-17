import React, { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: "Faust"},
        {id: 2, title: "The Name of The Rose"},
        { id: 3, title: "Watchmen" }
    ])

    const addBook = (title) => {
        setBooks([...books, {id: uuidv4(), title: title}])
    }

    const removeBook = (id) => {
        const booksArr = books.filter(item => item.id !== id)
        setBooks(booksArr)
    }

    return (
        <BookContext.Provider value={{books, removeBook, addBook}}>
            { props.children }
        </BookContext.Provider>
    )
}
 
export default BookContextProvider;