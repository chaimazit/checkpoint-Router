import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movieData } from "../movieData";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieData.find((el) => el.id == id);

  const onClick = () => navigate("/movie");
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>{movie.description}</p>
      <button className="btn btn-primary" onClick={onClick}>
        Go Back
      </button>
    </div>
  );
};

export default Details;