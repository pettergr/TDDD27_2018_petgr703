export const getProducts = (): Action => ({
    type: 'SET_PRODUCTS',
    payload: {
        request: {
            url: '/product'
        }
    }
});

export const addProduct = (product): Action => ({
    type: 'ADD_PRODUCT',
    payload: {
        request: {
            method: 'POST',
            url: '/product',
            data: product
        }
    }
});

export const deleteProduct = (productId): Action => ({
    type: 'DELETE_PRODUCT',
    payload: {
        request: {
            method: 'DELETE',
            url: `/product/${productId}`,
        }
    }
});

export const editProduct = (product): Action => ({
    type: 'EDIT_PRODUCT',
    payload: {
        request: {
            method: 'PUT',
            url: `/product/${product._id}`,
            data: product
        }
    }
});

export const getProduct = (productId): Action => ({
    type: 'GET_PRODUCT',
    payload: {
        request: {
            method: 'GET',
            url: `/product/${productId}`
        }
    }
});

export const resetActiveProduct = (): Action => ({
    type: 'RESET_ACTIVE_PRODUCT'
});
