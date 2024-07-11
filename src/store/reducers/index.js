
import { movies } from "../../data"
import { NEXT_MOVIE, PREV_MOVIE } from "../actions"

const initialState = {
    movies:movies,
    index: 0,
    favMovies: [],
}


const indexReducer = (state = initialState,action) => {
    switch (action.type){
        case NEXT_MOVIE:
            return{...state,index:state.index+1};
        case PREV_MOVIE:
            return {...state,index:state.index-1};
        default:
            return state;
    } 
}

export const reducer = indexReducer;