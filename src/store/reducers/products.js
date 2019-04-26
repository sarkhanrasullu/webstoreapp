import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    products: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_PRODUCTS:
            console.log(action.products);
            return {
                ...state,
                products: action.products,
                error: false
            }
        default:
            return state;
    }
};

export default reducer;