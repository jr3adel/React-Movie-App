import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeMovie } from '../store/actions/actions';

export default function Fav() {
    const mySelector = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    let removeFromFav = (e, movie) => {
        dispatch(removeMovie(movie));
    }
    return (
        <div className="container">
        <div className="row">
            {mySelector.length > 0 ? 
            mySelector.map((movie, index) => {
                let pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                return (
                <div className="col-3 py-2" key={index}>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={pic} className="card-img-top" style={{ height: '15rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">
                            </p>
                            <h2>
                                <i onClick={(e) => removeFromFav(e, movie)} 
                                className="bi bi-heart-fill text-danger"></i>
                            </h2>
                        </div>
                    </div>
                </div>
                )
            }): <h1 className='mx-auto my-5 text-info'>
                Favorites is Empty
                </h1>} 
            </div>
            </div>
    )
}