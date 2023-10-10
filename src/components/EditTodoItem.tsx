/** @jsxImportSource @emotion/react */
import * as todoItemStyle from '../style/todoItemStyle';
import { CheckboxLabel, TodoInput } from '../style/todoItemStyle';
import { AiOutlineSave, AiOutlineClose } from 'react-icons/ai';
import { useRef } from 'react';
import { updateTodo } from '../api/Fetcher';
import { editTodoItemProp, todoType } from '@/@types/todoType';

export default function EditTodoItem({
  todo,
  setEditingId,
  todoList,
  setTodoList,
}: editTodoItemProp) {
  const todoRef = useRef<HTMLInputElement | null>(null);

  const handleCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = {
      todo: todo.todo,
      isCompleted: !todo.isCompleted,
    };
    updateTodoData(updatedData);
  };

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const updatedData = {
      todo: todoRef.current?.value || todo.todo,
      isCompleted: todo.isCompleted,
    };
    updateTodoData(updatedData);
  };

  // Update todo
  const updateTodoData = async (updatedData: Pick<todoType, 'todo' | 'isCompleted'>) => {
    try {
      const updatedTodo = await updateTodo(updatedData, todo.id);
      const updatedList = todoList.map((prevTodo) =>
        prevTodo.id === todo.id ? updatedTodo : prevTodo
      );
      //@ts-ignore
      setTodoList(updatedList);
      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li css={[todoItemStyle.todoLi, todoItemStyle.editModeLi]}>
      <CheckboxLabel htmlFor={'checkbox_' + todo.id} checked={todo.isCompleted}></CheckboxLabel>
      <input
        css={todoItemStyle.checkbox}
        id={'checkbox_' + todo.id}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleCheckboxToggle}
      />
      <TodoInput
        checked={todo.isCompleted}
        defaultValue={todo.todo}
        ref={todoRef}
        data-testid="modify-input"
        autoFocus
      />

      <button data-testid="submit-button" onClick={handleSubmitClick}>
        <AiOutlineSave size={18} />
      </button>
      <button
        data-testid="cancel-button"
        onClick={() => {
          setEditingId(null);
        }}
      >
        <AiOutlineClose size={18} />
      </button>
    </li>
  );
}
