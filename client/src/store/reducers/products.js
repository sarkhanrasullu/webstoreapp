import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    products: [],
    count: 0,
    currentPage: 1,
    error: false,
    loadFunc: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
                count: action.count,
                currentPage: action.currentPage,
                loadFunc: action.loadFunc,
                error: false
            }
        default:
            return state;
    }
};

export default reducer;