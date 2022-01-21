const INITIAL_VALUE = {
    favorites: [],
    upcoming : [],
  };


export default function favReducer (state = INITIAL_VALUE, action){
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case 'REMOVE':
            return {
                favorites: state.favorites.filter(movie => movie.id !== action.payload.id)
            };
        case 'UPCOMING':
            return{
                ...state,
                 upComing:[ ...state.upcoming, action.payload]
            }
        
        default:
            return state;
    }

}
