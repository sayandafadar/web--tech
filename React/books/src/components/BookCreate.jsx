import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [bookName, setBookName] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(bookName);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Book Name"
          onInput={(userInput) =>
            setBookName({ id: Math.random(), name: userInput.target.value })
          }
        />
        <button onSubmit={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
