import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div>
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          placeholder="Search"
          type="text"
          onInput={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
