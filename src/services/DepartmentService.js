import axios from './CommonAxios'

export default class DepartmentService {
  
  static findAll = (callBack) => {
    return axios 
        .get('departments')
        .then(res => {
            callBack(res.data);
        })
        .catch(err => {
            console.log(err)
        })
  }

}