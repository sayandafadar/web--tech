import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([{}]);

  const createBook = (newBook) => {
    setBooks((prevState) => [...prevState, newBook]);
  };
  return (
    <div>
      <BookCreate onCreate={createBook} />
      {books.map((book) => (
        <p key={Math.random()}>{book.name}</p>
      ))}
    </div>
  );
}

export default App;
