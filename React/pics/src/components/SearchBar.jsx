import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onInput={(e) => setTerm(e.target.value)} />
      </form>
    </div>
  );
}

export default SearchBar;
