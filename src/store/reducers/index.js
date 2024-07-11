
import { movies } from "../../data"
import { ADD_LIST, NEXT_MOVIE, PREV_MOVIE } from "../actions"

const initialState = {
    movies:movies,
    index: 0,
    favMovies: [],
}


const indexReducer = (state = initialState,action) => {
    switch (action.type){
        case NEXT_MOVIE:
            if(state.index+1 === movies.length){
                return state;
            }else{
                return {...state,index:state.index+1};
            }
        case PREV_MOVIE:
            if(state.index === 0){
                return state;
            }else{
                return{...state,index:state.index-1};
            }
        case ADD_LIST:
            return{...state,favMovies: [...state.favMovies,movies[action.payload]]}
        default:
            return state;
    } 
}

export const reducer = indexReducer;