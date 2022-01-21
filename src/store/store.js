import { createStore ,applyMiddleware} from "redux";
import favReducer from "./reducers/reducer";
import  { composeWithDevTools } from 'redux-devtools-extension';
import axios from "axios";
import thunk from "redux-thunk";
const store = createStore(favReducer,composeWithDevTools(applyMiddleware(thunk)))

export const getUpcoming= () => (dispatch) =>{
    return axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=ca878715e18e427d557373ea30e32487")
    .then((res)=>dispatch({type:"UPCOMING", payload : res.data.results }))
    .catch((err)=> console.log(err) )
}
export default store;   