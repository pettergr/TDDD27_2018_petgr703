export const getCustomers = (): Action => ({
    type: 'SET_CUSTOMERS',
    payload: {
        request: {
            url: '/customer'
        }
    }
});

export const addCustomer = (customerName): Action => ({
    type: 'ADD_CUSTOMER',
    payload: {
        request: {
            method: 'POST',
            url: '/customer',
            data: {
                name: customerName
            }
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
