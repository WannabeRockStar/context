import React, { useContext } from "react"
import { BookContext } from "./../context/BookContext"

import BookDetails from "./BookDetails"

const BookList = () => {
    const bookContext = useContext(BookContext)
    const { books } = bookContext
    console.log(books)
    
    const list = books.map(item => <BookDetails book={item} key={item.id} />)

    return (
        <ul>
            { list }
        </ul>
    )
}
 
export default BookList;