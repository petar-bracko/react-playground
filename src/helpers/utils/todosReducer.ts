import { IAddTodoPayload, IDeleteTodoPayload, ITodo } from "types";

export const todosReducer = (
  todos: ITodo[],
  action: { type: string; payload: IAddTodoPayload | IDeleteTodoPayload }
) => {
  switch (action.type) {
    case "added-todo": {
      const payload = <IAddTodoPayload>{ ...action.payload };

      return [
        ...todos,
        { done: false, id: todos.length + 1, text: payload.text },
      ];
    }
    default: {
      throw new Error("Unknown action: " + action.type).message;
    }
  }
};
