import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import defaultState from "../state/state";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const client = axios.create({
    baseURL: "",
    responseType: "json"
});

client.interceptors.request.use(
    function(config) {
        const token = localStorage.token;

        if (token != null) {
            config.headers.Authorization = `JWT ${token}`;
        }

        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);

const middleware = [axiosMiddleware(client)];

const store = createStore(
    rootReducer,
    defaultState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
