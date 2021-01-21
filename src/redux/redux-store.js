import appReducer from "./appReducer";
import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    appPage: appReducer
})

let store = createStore(reducers, undefined, composeWithDevTools())
window.store = store

export default store