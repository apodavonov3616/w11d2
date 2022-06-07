
// const RECEIVE_TODO = "RECEIVE_TODO";
// const RECEIVE_TODOS = "RECEIVE_TODOS";

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => {
    return {
      type: RECEIVE_TODOS,
      todos
    };
  };

export const receiveTodo = (todos) => {
    return {
        type: RECEIVE_TODO,
        todo
    };
};
