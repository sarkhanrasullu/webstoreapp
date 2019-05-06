import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    user: null,
    errorMsg: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
                errorMsg: action.errorMsg
            }
        default:
            return state;
    }
};

export default reducer;