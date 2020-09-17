import React, { useContext } from 'react';
import { BookContext } from "./../context/BookContext"

const BookDetails = ({book}) => {

    const { removeBook } = useContext(BookContext)
    // console.log(bookContext)

    return (
        <li onClick={() => removeBook(book.id)}>
            { book.title }
        </li>
    )
}
 
export default BookDetails;