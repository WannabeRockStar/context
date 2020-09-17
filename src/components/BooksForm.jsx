import React, { useState, useContext } from 'react'
import {BookContext} from "./../context/BookContext"

const BooksForm = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('')

    const getBook = (e) => {
        e.preventDefault()
        addBook(title)
        console.log(title)
        setTitle('')
    }

    return (
        <form onSubmit={getBook}>
            <div>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <button>Add Book</button>
                
            </div>
        </form>
    )
}
 
export default BooksForm