const INITIAL_VALUE = {
    favorites: [],
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
        default:
            return state;
    }

}
