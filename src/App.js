import "./App.css";
import { movieData } from "./movieData";
import { useState } from "react";
import {Home} from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Details  from "./components/Details";
function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const addMovie = (newMovie) => {
    console.log(newMovie);
    movieData.push(newMovie);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/movie" />} />
        <Route
          path="/movie"
          element={
            <Home
              title={title}
              setTitle={setTitle}
              rating={rating}
              setRating={setRating}
              addMovie={addMovie}
              movieData={movieData}
            />
          }
        />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;