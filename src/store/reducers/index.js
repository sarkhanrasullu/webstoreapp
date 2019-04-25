import { combineReducers } from 'redux'
import categories from './categories'
import departments from './departments'

export default combineReducers({
    categories,
    departments
})