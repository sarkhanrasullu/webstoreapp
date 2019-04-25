import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    departments: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_DEPARTMENTS:
            console.log(action.departments);
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