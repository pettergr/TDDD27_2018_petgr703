const productReducer = (state = {products: [], activeProduct: {}}, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS_SUCCESS':
            return Object.assign({}, state, {
                products: [
                    ...action.payload.data
                ]
            })
        case 'ADD_PRODUCT_SUCCESS':
            return Object.assign({}, state, {
                products: [
                    ...state.products,
                    action.payload.data
                ],
                activeProduct: action.payload.data
            })

        case 'EDIT_PRODUCT_SUCCESS':
            return Object.assign({}, state, {
                activeProduct: action.payload.data
            })

        case 'DELETE_PRODUCT_SUCCESS':
            let prodId = action.meta.previousAction.payload.request.url.substring(10);
            return Object.assign({}, state, {
                products: state.products.filter(elem => elem._id !== prodId),
            })

        case 'GET_PRODUCT_SUCCESS':
            return Object.assign({}, state, {
                activeProduct: action.payload.data
            })

        case 'GET_PRODUCT_FAIL':
        case 'RESET_ACTIVE_PRODUCT':
            return Object.assign({}, state, {
                activeProduct: {}
            })

        default:
            return state
    }
}

export default productReducer
