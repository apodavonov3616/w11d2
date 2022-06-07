// import {todoReducer } from "./todo_reducer";
import todosReducer from "./todos_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    // todo: todoReducer,
    todos: todosReducer
});

export default rootReducer;

