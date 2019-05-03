import *  as actionTypes from './actionTypes';
import axios from '../../services/CommonAxios'

export const setCategories = (categories) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        categories: categories
    }
}

export const loadCategoriesFailed = () => {
    return {
        type: actionTypes.LOAD_CATEGORIES_FAILED
    }
}

export const loadCategories = (departmentId) => {
    return dispatch => {
        axios.get('/categories/inDepartment/'+departmentId)
        .then(resp=>{
             dispatch(setCategories(resp.data));
        })
        .catch(error=>{
            dispatch(loadCategoriesFailed()); 
        }); 
    }
}