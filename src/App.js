import React from 'react'
import BookContextProvider from "./context/BookContext"
import BookList from "./components/BookList"
import BooksForm from "./components/BooksForm"

function App() {
  	return (
    	<div className="App">
      		<BookContextProvider>
				<BookList />
				<BooksForm />
			</BookContextProvider>
    	</div>
  	);
}

export default App;
