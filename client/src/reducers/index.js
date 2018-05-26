import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
import productReducer from './productReducer'
import orderReducer from './orderReducer'
import { reducer as formReducer, } from 'redux-form';

export default combineReducers({
    customerState:customerReducer,
    productState:productReducer,
	orderState:orderReducer,
    form: formReducer
})
