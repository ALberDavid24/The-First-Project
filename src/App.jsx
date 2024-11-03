import React, {useState, useEffect} from "react";
import "./App.css";
import Barra from "./components/Barra.Jsx";
import Cards from "./components/Cards";

function App() {
  const [characters, setCharacters] = useState([]);

  const initialurl = "https://dragonball-api.com/api/characters/1";
  
  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setCharacters(data.results);
        } else {
          setCharacters(data); 
        }
      })
      .catch(error => console.error("Error fetching characters:", error));
  };
  
  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <div className="App">
      <h1>ESENCIA</h1>
      <Barra />
      <div className="container">
        <Cards characters={characters} />
      </div> 
    </div>
  );
}

export default App
