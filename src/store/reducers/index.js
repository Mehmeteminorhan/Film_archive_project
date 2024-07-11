/* eslint-disable no-case-declarations */

import { movies } from "../../data"
import { ADD_LIST, NEXT_MOVIE, PREV_MOVIE, REMOVE_LIST } from "../actions"

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
            const currentMovie = state.movies[state.index];
            return{...state,
                favMovies: [...state.favMovies,currentMovie], 
                movies: state.movies.filter((movie) => movie.id != currentMovie.id)
             };
        case REMOVE_LIST:
            const movieToRemove = state.favMovies.find((movie) => movie.id === action.payload);
            return {...state,
                favMovies: state.favMovies.filter((movie) => movie.id != action.payload),
                movies: [...state.movies,movieToRemove]
            }
        default:
            return state;
    } 
}

export const reducer = indexReducer;