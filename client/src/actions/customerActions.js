import store from '../store/store';
import axios from "axios";

/*const actions = store => ({
    getCustomers() {
        store.setState({customersLoading: true});

        axios
            .get("/customer")
            .then(response => {
                store.setState({
                    customers: response.data,
                    customersLoading: false
                });
            })
            .catch(error => {
                store.setState({
                    error: true,
                    customersLoading: false
                });
            });
    },

    deleteCustomer(state, customer) {
        store.setState({customersLoading: true});
        const customerId = customer._id;
        axios
            .delete(`/customer/${customerId}`)
            .then(response => {
                store.setState({
                    customers: state.customers.filter(element => element._id !== customerId),
                    customersLoading: false
                });
            })
            .catch(error => {
                store.setState({
                    error: true,
                    customersLoading: false
                });
            });
    },

    addCustomer(state, customerName) {
        store.setState({customersLoading: true});
        axios
            .post("/customer", { name: customerName })
            .then(response => {
                store.setState({
                    customers: [...state.customers, response.data],
                    customersLoading: false
                });
            })
            .catch(error => {
                store.setState({
                    error: true,
                    customersLoading: false
                });
            });
    }
});*/

/*export function getCustomers() {
    console.log("inne i getCustomers")
    return {
        type: 'SET_CUSTOMERS',
        payload: {
            request:{
            url:'/customer'
            }
        }
    }
}*/

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

/*
deleteCustomer(state, customer) {
    store.setState({customersLoading: true});
    const customerId = customer._id;
    axios
        .delete(`/customer/${customerId}`)
        .then(response => {
            store.setState({
                customers: state.customers.filter(element => element._id !== customerId),
                customersLoading: false
            });
        })
        .catch(error => {
            store.setState({
                error: true,
                customersLoading: false
            });
        });
},*/
