import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';


import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store; 
