const customerReducer = (state = {customers: []}, action) => {
    switch (action.type) {
        case 'SET_CUSTOMERS_SUCCESS':
            console.log("SET_CUSTOMERS")
            console.log(action.payload.data)
            return Object.assign({}, state, {
                customers: [
                    ...action.payload.data
                ]
            })
        case 'ADD_CUSTOMER_SUCCESS':
            console.log(action);
            return Object.assign({}, state, {
                customers: [
                    ...state.customers,
                    action.payload.data
                ]
            })

        case 'DELETE_CUSTOMER_SUCCESS':
            console.log(action.meta.previousAction.payload.request.url.substring(10));
            let custId = action.meta.previousAction.payload.request.url.substring(10);
            return Object.assign({}, state, {
                customers: state.customers.filter(elem => elem._id !== custId),
            })

        default:
            return state
    }
}

export default customerReducer
