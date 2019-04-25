import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    categories: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_CATEGORIES:
            console.log(action.categories);
            return {
                ...state,
                categories: action.categories,
                error: false
            }
        default:
            return state;
    }
};

export default reducer;