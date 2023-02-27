import AddMovie from "./AddMovie";

import MovieList from "./MovieList";
import Filter from "./Filter";
import React from "react";
import Rate from "./Rate";

export const Home = ({
  title,
  setTitle,
  rating,
  setRating,
  addMovie,
  movieData,
}) => {
  return (
    <div>
      <Filter title={title} setTitle={setTitle} />
      <Rate rating={rating} setRating={setRating} />
      <AddMovie addMovie={addMovie} />
      <MovieList movieData={movieData} title={title} rating={rating} />
    </div>
  );
};
