import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [data, setData] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setData(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imageData={data} />
    </div>
  );
}

export default App;
