import *  as actionTypes from './actionTypes';
import axios from '../../services/CommonAxios'

export const setDepartments = (departments) => {
    return {
        type: actionTypes.SET_DEPARTMENTS,
        departments: departments
    }
}

export const loadDepartmentsFailed = () => {
    return {
        type: actionTypes.LOAD_DEPARTMENTS_FAILED
    }
}

export const loadDepartments = () => {
    return dispatch => {
        axios.get('/departments')
        .then(resp=>{
             dispatch(setDepartments(resp.data));
        })
        .catch(error=>{
            dispatch(loadDepartmentsFailed()); 
        }); 
    }
}