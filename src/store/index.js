import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { boardReducer } from './reducers/boardReducers';
import { groupReducer } from './reducers/groupReducers';

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
    boardModule: boardReducer,
    groupModule: groupReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))