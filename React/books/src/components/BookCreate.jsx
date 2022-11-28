import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          placeholder="e.g Harry Potter"
          onChange={(userInput) => setTitle(userInput.target.value)}
          value={title}
        />
        <button className="button" onSubmit={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
