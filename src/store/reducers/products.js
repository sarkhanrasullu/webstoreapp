import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    products: [],
    count: 0,
    currentPage: 1,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_PRODUCTS:
            console.log(action.products);
            return {
                ...state,
                products: action.products,
                count: action.count,
                currentPage: action.currentPage,
                error: false
            }
        default:
            return state;
    }
};

export default reducer;