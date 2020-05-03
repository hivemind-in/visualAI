import dataReducer from "./reducer/data";
import { createStore, combineReducers } from 'redux'
import stateReducer from "./reducer/states";


// const createStore = redux.createStore
const rootReducer = combineReducers({
    "data": dataReducer,
    "state": stateReducer
})


const store = createStore(rootReducer)


export default store;