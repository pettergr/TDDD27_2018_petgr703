import { update, asyncUpdate } from "reduxigen/actions";
import axios from "axios";

/*export const getCustomers = asyncUpdate(
  "customers",
  () => fetch("/customer"),
  "json"
);*/

export const getCustomers = asyncUpdate(
    "customers",
    () => axios.get("/customer").then(function(response) {return response.data})
);
