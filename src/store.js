"use strict";

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


// Add middleware to createStore
var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// App Reducers
import salesReducer from './reducers/salesReducer';

// Combine Reducers
var reducers = combineReducers({
    salesReducer:salesReducer,
});

// Create Store
var store = createStoreWithMiddleware(reducers);

export default store;