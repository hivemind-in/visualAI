import keyboard_reducer from './reducer/keyboard'
import { inputToggle_reducer } from "./reducer/input";
import { toggleLogin_reducer } from "./reducer/login";
import redux from 'redux'


const createStore = redux.createStore



const store = createStore(keyboard_reducer)


export default store;