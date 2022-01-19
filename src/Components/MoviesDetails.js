import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function MoviesDetails() {
  const params = useParams();
  const [details, setDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=ca878715e18e427d557373ea30e32487`
      )
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Movie Details</h1>
      <h3>Title : {details.title}</h3>
      <p>Overview : {details.overview}</p>
      <p>Release_date : {details.release_date}</p>

      <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}/> 
    </div>
  );
}
