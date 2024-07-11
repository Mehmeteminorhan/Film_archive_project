export const NEXT_MOVIE = 'NEXT_MOVIE';
export const PREV_MOVIE = 'PREV_MOVIE';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export const nextMovie = () => {
    return {type:NEXT_MOVIE};
}

export const prevMovie = () =>{
    return {type:PREV_MOVIE};
}

export const addList = () => {
    return {type: ADD_LIST};
}

export const removeList = (idx) => {
    return {type: REMOVE_LIST,payload:idx}
}

