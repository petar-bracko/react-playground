import { useReducer } from "react";
import { IAddTodoPayload, ITodo } from "types";
import { todosReducer } from "helpers/utils";

const initTodos: ITodo[] = [
  { done: true, id: 1, text: "create init state" },
  { done: false, id: 2, text: "create reducer" },
];

export const UsingReducer = () => {
  const [myTodos, dispatch] = useReducer(todosReducer, initTodos);

  const handleAddTodo = () => {
    dispatch({
      type: "added-todo",
      payload: { text: "this is placeholder text" } as IAddTodoPayload,
    });
  };

  return (
    <>
      <h2>useReducer</h2>
      <div>
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      <ul>
        {myTodos.map((todo, index) => (
          <li key={`${index}-${todo.id}`}>
            {todo.id} - {todo.text} - {todo.done.toString()}
          </li>
        ))}
      </ul>
    </>
  );
};
