import { update, asyncUpdate,  asyncAction } from "reduxigen/actions";
import axios from "axios";

export const getCustomers = asyncUpdate(
    "customers",
    () => axios.get("/customer").then(function(response) {return response.data})
);

export const deleteCustomer = asyncAction(
    "customers",
    (value,state) => {
        console.log("delete reduce")
        return state.customers.filter(element => element._id !== value);
    },
    customer => {
        const customerId = customer._id;
        return axios.delete(`/customer/${customerId}`).then(function() {
            console.log("delete axios");
            return customerId});
    }
);

export const addCustomer = asyncAction(
    "customers",
    (customer, state) => {
        console.log("add reduce")
        return [...state.customers, customer];
    },
    customerName => {
        return axios.post("/customer", { name: customerName }).then(function(response) {
            console.log("add axios");
            return response.data});
    }
);
