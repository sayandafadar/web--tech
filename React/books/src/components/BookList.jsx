import React from "react";
import BookShow from "./BookShow";

function BookList({books, onDelete, onEdit}) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} onEdit={onEdit} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BookList;
