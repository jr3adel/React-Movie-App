import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { favMovie, removeMovie } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Movielist() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.favorites);
  console.log(selector);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ca878715e18e427d557373ea30e32487"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  let EditFav = (e, movie) => {
    if (e.target.className ==="bi bi-heart") {
      dispatch(favMovie(movie));
      e.target.className = "bi bi-heart-fill text-danger";
    } else {
      dispatch(removeMovie(movie));
      e.target.className = "bi bi-heart";
    }
  };
  let checkFavMovie = (id) => {
    let exist = selector.find((movie) => movie.id == id);
    return exist;
  };
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, index) => {
          const pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          return (
            <div className="col-3 py-2" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={pic}
                  className="card-img-top"
                  style={{ height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  {checkFavMovie(movie.id) == undefined ? (
                    <h2>
                      <i
                        onClick={(e) => EditFav(e, movie)}
                        className="bi bi-heart"
                      ></i>
                    </h2>
                  ) : (
                    <h2>
                      <i
                        onClick={(e) => EditFav(e, movie)}
                        className="bi bi-heart-fill text-danger"
                      ></i>
                    </h2>
                  )}
                  <Link to={`/movie/${movie.id}`} className="btn btn-secondary  ">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
