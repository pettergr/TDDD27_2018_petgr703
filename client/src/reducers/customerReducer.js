const customerReducer = (state = {customers: [], activeCustomer: {}}, action) => {
    switch (action.type) {
        case 'SET_CUSTOMERS_SUCCESS':
            return Object.assign({}, state, {
                customers: [
                    ...action.payload.data
                ]
            })
        case 'ADD_CUSTOMER_SUCCESS':
            return Object.assign({}, state, {
                customers: [
                    ...state.customers,
                    action.payload.data
                ]
            })

        case 'DELETE_CUSTOMER_SUCCESS':
            let custId = action.meta.previousAction.payload.request.url.substring(10);
            return Object.assign({}, state, {
                customers: state.customers.filter(elem => elem._id !== custId),
            })

        case 'GET_CUSTOMER_SUCCESS':
            return Object.assign({}, state, {
                activeCustomer: action.payload.data
            })

        case 'GET_CUSTOMER_FAIL':
            return Object.assign({}, state, {
                activeCustomer: {}
            })

        default:
            return state
    }
}

export default customerReducer
