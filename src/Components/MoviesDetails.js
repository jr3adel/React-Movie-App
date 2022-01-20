import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function MoviesDetails() {
  const params = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=ca878715e18e427d557373ea30e32487`
      )
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  const pic = `https://image.tmdb.org/t/p/w500/${details.poster_path}`;
  return (
    <div className='container'>
    <div className="row py-5 ms-5">
        <div className="col-8 row">
            <div className="d-flex justify-content-between">
                <div className='col-4'>
                    <img src={pic} 
                    className="card-img-top" style={{ height: '20rem', width: '20rem'}}/>
                </div>
                <div className='col-6'>
                    <h1>Movie Name: {details.title}</h1>
                    <h4>Movie id: {details.id}</h4>
                    <h5>Movie Rate: {details.release_date}</h5>
                    <p>Movie Overview:
                        <small>{details.overview}</small>
                    </p>
                </div>
            </div>
        </div>
    </div>            
</div>
    
  )
}
