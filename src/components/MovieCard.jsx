import React from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { title, image, rating, id } = movie;
  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem", margin: "45px", padding: "20px" }}
      >
        <img src={image} alt="" className="card-img-top" />

        <Rate rating={rating} />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <Link to={`/movie/${id}`} className=" btn btn-primary">
            read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
