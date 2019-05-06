import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    carts: null,
    errorMsg: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_CARTS:
            return {
                ...state,
                carts: action.carts,
                errorMsg: action.errorMsg
            }
        default:
            return state;
    }
};

export default reducer;