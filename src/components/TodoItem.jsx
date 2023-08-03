/** @jsxImportSource @emotion/react */
import * as todoItemStyle from '../style/todoItemStyle';
import { AiOutlineSave, AiOutlineClose, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { deleteTodo, updateTodo } from '../api/Fetcher';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoListState';

export default function TodoItem({ todo }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [isEditing, setIsEditing] = useState(false);
  const todoRef = useRef(todo.todo);

  // Update todo
  const handleUpdateTodo = async (e) => {
    const checkboxData = {
      todo: todoRef.current.value,
      isCompleted: e.target.type === 'checkbox' ? !todo.isCompleted : todo.isCompleted,
    };
    const updatedTodo = await updateTodo(checkboxData, todo.id);
    const updatedList = todoList.map((prevTodo) =>
      prevTodo.id === todo.id ? updatedTodo : prevTodo
    );
    setTodoList(updatedList);
    setIsEditing(false);
  };
  useEffect(() => {
    if (isEditing) {
      todoRef.current.focus();
    }
  }, [isEditing]);

  // Delete todo
  const handleDeleteClick = async () => {
    await deleteTodo(todo.id);
    const updatedList = todoList.filter((prevTodo) => prevTodo.id !== todo.id);
    setTodoList(updatedList);
  };

  return isEditing ? (
    <li css={[todoItemStyle.todoLi, todoItemStyle.editModeLi]}>
      <input
        css={todoItemStyle.checkbox}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleUpdateTodo}
      />
      <input css={todoItemStyle.todoInput} defaultValue={todo.todo} ref={todoRef} autoFocus />

      <button data-testid="submit-button" onClick={handleUpdateTodo}>
        <AiOutlineSave size={18} />
      </button>
      <button
        data-testid="cancel-button"
        onClick={() => {
          setIsEditing(false);
        }}
      >
        <AiOutlineClose size={18} />
      </button>
    </li>
  ) : (
    <li css={todoItemStyle.todoLi}>
      <input
        css={todoItemStyle.checkbox}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleUpdateTodo}
      />
      <input
        css={todoItemStyle.todoInput}
        value={todo.todo}
        ref={todoRef}
        data-testid="modify-input"
        readOnly
      />

      <button
        data-testid="modify-button"
        onClick={() => {
          setIsEditing(true);
        }}
      >
        <AiOutlineEdit size={18} />
      </button>
      <button data-testid="delete-button" onClick={handleDeleteClick}>
        <AiOutlineDelete size={18} />
      </button>
    </li>
  );
}
