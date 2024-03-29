export const getCustomers = (): Action => ({
    type: 'SET_CUSTOMERS',
    payload: {
        request: {
            url: '/customer'
        }
    }
});

export const addCustomer = (customer): Action => ({
    type: 'ADD_CUSTOMER',
    payload: {
        request: {
            method: 'POST',
            url: '/customer',
            data: customer
        }
    }
});

export const deleteCustomer = (customerId): Action => ({
    type: 'DELETE_CUSTOMER',
    payload: {
        request: {
            method: 'DELETE',
            url: `/customer/${customerId}`,
        }
    }
});

export const editCustomer = (customer): Action => ({
    type: 'EDIT_CUSTOMER',
    payload: {
        request: {
            method: 'PUT',
            url: `/customer/${customer._id}`,
            data: customer
        }
    }
});

export const getCustomer = (customerId): Action => ({
    type: 'GET_CUSTOMER',
    payload: {
        request: {
            method: 'GET',
            url: `/customer/${customerId}`
        }
    }
});

export const resetActiveCustomer = (): Action => ({
    type: 'RESET_ACTIVE_CUSTOMER'
});
