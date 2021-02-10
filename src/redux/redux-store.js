import appReducer from "./appReducer";
import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    appPage: appReducer
})

// let store = createStore(reducers, undefined)
let store = createStore(reducers, undefined, composeWithDevTools())

export default store