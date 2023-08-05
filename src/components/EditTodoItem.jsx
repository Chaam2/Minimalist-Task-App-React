/** @jsxImportSource @emotion/react */
import * as todoItemStyle from '../style/todoItemStyle';
import { CheckboxLabel, TodoInput } from '../style/todoItemStyle';
import { AiOutlineSave, AiOutlineClose } from 'react-icons/ai';
import { useRef } from 'react';
import { updateTodo } from '../api/Fetcher';

export default function EditTodoItem({ todo, setEditingId, todoList, setTodoList }) {
  const todoRef = useRef(todo.todo);

  // Update todo
  const handleUpdateTodo = async (e) => {
    const updatedData = {
      todo: todoRef.current.value,
      isCompleted: e.target.type === 'checkbox' ? !todo.isCompleted : todo.isCompleted,
    };
    const updatedTodo = await updateTodo(updatedData, todo.id);
    const updatedList = todoList.map((prevTodo) =>
      prevTodo.id === todo.id ? updatedTodo : prevTodo
    );
    setTodoList(updatedList);
    setEditingId(null);
  };

  return (
    <li css={[todoItemStyle.todoLi, todoItemStyle.editModeLi]}>
      <CheckboxLabel htmlFor={'checkbox_' + todo.id} checked={todo.isCompleted}></CheckboxLabel>
      <input
        css={todoItemStyle.checkbox}
        id={'checkbox_' + todo.id}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleUpdateTodo}
      />
      <TodoInput
        checked={todo.isCompleted}
        defaultValue={todo.todo}
        ref={todoRef}
        data-testid="modify-input"
        autoFocus
      />

      <button data-testid="submit-button" onClick={handleUpdateTodo}>
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
