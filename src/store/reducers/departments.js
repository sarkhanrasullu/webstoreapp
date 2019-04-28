import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    departments: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_DEPARTMENTS:
            return {
                ...state,
                departments: action.departments,
                error: false
            }
        default:
            return state;
    }
};

export default reducer;