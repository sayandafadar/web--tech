import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimals() {
  const animals = ["bird", "cow", "cat", "dog", "gator", "horse"];
  const randomNumber = Math.floor(Math.random() * animals.length);
  return animals[randomNumber];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick() {
    setAnimals([...animals, getRandomAnimals()]);
  }

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">
        {animals.map((animal) => (
          <AnimalShow key={Math.random()} type={animal} />
        ))}
      </div>
    </div>
  );
}

export default App;
