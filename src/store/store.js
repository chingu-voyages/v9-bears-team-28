import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import projectReducer from '../reducers/projectReducer';
import voyageReducer from '../reducers/voyageReducer';
import initialState from "./initialState";

const rootReducer = combineReducers({
	project: projectReducer,
	voyage:voyageReducer
});

const middlewares = applyMiddleware(thunk);

// Just For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(middlewares));

export default store;
