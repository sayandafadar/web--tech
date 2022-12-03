import React, { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useContext(BooksContext);
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
}

export default BookList;
