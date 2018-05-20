import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "reduxigen/actions";
import defaultState from "../state/state";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer(defaultState), composeEnhancers(applyMiddleware(thunk)));
