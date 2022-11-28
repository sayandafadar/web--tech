import React from "react";

function BookShow({book, onDelete}) {
  return (
    <div className="book-show">
      {book.title}
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
}

export default BookShow;
