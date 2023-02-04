export interface IDummy {
  name: string;
  age: number;
}

export interface IDummyCTX {
  dummy: IDummy;
  setDummy: React.Dispatch<React.SetStateAction<IDummy>>;
}

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

// TODOS REDUCER
export type { IAddTodoPayload, IDeleteTodoPayload } from "./todosReducerTypes";
