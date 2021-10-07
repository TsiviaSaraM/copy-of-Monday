import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { boardReducer } from './reducers/boardReducers';

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
    boardModule: boardReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))