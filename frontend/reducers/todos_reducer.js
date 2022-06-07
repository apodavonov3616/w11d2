import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions"

const todosReducer = (state = [], action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TODOS:
            nextState[action.todos.id] = action.todos
        default:
            return state
    }
}

export default todosReducer;