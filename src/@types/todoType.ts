import { AxiosResponse } from 'axios';

export type todoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export type todoItemProp = {
  todoList: todoType[];
  setTodoList: (updatedList: todoType[]) => void;
};

export type styledTodoProp = {
  checked: boolean;
};
