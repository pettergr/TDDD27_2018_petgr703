import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';
import defaultState from "../state/state";

const middlewares = connect ? applyMiddleware(connect(defaultState)): [];
const store = createStore(defaultState, middlewares);

export default store;
