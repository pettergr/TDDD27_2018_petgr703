import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
import { reducer as formReducer, } from 'redux-form';

export default combineReducers({
    customerState:customerReducer,
    form: formReducer
})
