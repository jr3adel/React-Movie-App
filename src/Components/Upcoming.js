import React, { useEffect, useState } from "react";
import { getUpcoming } from "../store/store";
import { useSelector,useDispatch } from "react-redux";
export default function UpcomingList(){
    const [upcoming, setUpcoming] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.upcoming);
  useEffect(()=>{
      dispatch(getUpcoming()).then(res=>setUpcoming(res.payload))
  },[])
  return(
    <div className="container">
    <div className="row">
      {upcoming.map((movie, index) => {
        const pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        return (
          <div className="col-3 py-2" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic}
                className="card-img-top"
                style={{ height: "15rem" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )

}