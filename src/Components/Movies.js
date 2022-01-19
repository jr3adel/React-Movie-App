import react from "react";
import { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Movielist() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ca878715e18e427d557373ea30e32487")
    .then((res) => setMovies(res.data.results))
    .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Movie List</h1>
      <ul className="list-unstyled">
          {
        movies.map((movie, index) => {
          return (
            
            <div>
                <Link key={index} to={`/movie/${movie.id}`}>
                  <li>{movie.original_title}</li>
                </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
