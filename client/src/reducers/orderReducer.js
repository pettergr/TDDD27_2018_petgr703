const orderReducer = (state = {orders: [], activeOrder: {}}, action) => {
    switch (action.type) {
        case 'SET_ORDERS_SUCCESS':
            return Object.assign({}, state, {
                orders: [
                    ...action.payload.data
                ]
            })
        case 'ADD_ORDER_SUCCESS':
            return Object.assign({}, state, {
                orders: [
                    ...state.orders,
                    action.payload.data
                ],
                activeOrder: action.payload.data
            })

        case 'EDIT_ORDER_SUCCESS':
            return Object.assign({}, state, {
                activeOrder: action.payload.data
            })

        case 'DELETE_ORDER_SUCCESS':
            let orderId = action.meta.previousAction.payload.request.url.substring(10);
            return Object.assign({}, state, {
                orders: state.orders.filter(elem => elem._id !== orderId),
            })

        case 'GET_ORDER_SUCCESS':
            return Object.assign({}, state, {
                activeOrder: action.payload.data
            })

        case 'GET_ORDER_FAIL':
        case 'RESET_ACTIVE_ORDER':
            return Object.assign({}, state, {
                activeOrder: {}
            })

        default:
            return state
    }
}

export default orderReducer
