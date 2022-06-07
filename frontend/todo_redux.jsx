import { receiveTodos, receiveTodo } from  "./actions/todo_actions"
import todosReducer from "./reducers/todos_reducer";
import React from 'react';
import ReactDOM from "react-dom"
import configStore from "./store/store"



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configStore()
    window.store = store

    ReactDOM.render(<h1>Todos App</h1>, root);

})