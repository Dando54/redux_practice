import { combineReducers, createStore } from "redux";
import timerReducer from "redux/ducks/timer";

const reducer = combineReducers({
    timer: timerReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;