export const getOrders = (): Action => ({
    type: 'SET_ORDERS',
    payload: {
        request: {
            url: '/order'
        }
    }
});

export const addOrder = (order): Action => ({
    type: 'ADD_ORDER',
    payload: {
        request: {
            method: 'POST',
            url: '/order',
            data: order
        }
    }
});

export const deleteOrder = (orderId): Action => ({
    type: 'DELETE_ORDER',
    payload: {
        request: {
            method: 'DELETE',
            url: `/order/${orderId}`,
        }
    }
});

export const editOrder = (order): Action => ({
    type: 'EDIT_ORDER',
    payload: {
        request: {
            method: 'PUT',
            url: `/order/${order._id}`,
            data: order
        }
    }
});

export const getOrder = (orderId): Action => ({
    type: 'GET_ORDER',
    payload: {
        request: {
            method: 'GET',
            url: `/order/${orderId}`
        }
    }
});

export const resetActiveOrder = (): Action => ({
    type: 'RESET_ACTIVE_ORDER'
});
