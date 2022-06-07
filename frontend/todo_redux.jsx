import { receiveTodos, receiveTodo } from  "./actions/todo_actions"
import todosReducer from "./reducers/todos_reducer";
import React from 'react';
import store from "./store/store"

window.store = store