import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
import productReducer from './productReducer'
import { reducer as formReducer, } from 'redux-form';

export default combineReducers({
    customerState:customerReducer,
    productState:productReducer,
    form: formReducer
})
