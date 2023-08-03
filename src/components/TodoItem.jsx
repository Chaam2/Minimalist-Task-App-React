import { useRef, useState } from 'react';
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

  // Delete todo
  const handleDeleteClick = async () => {
    await deleteTodo(todo.id);
    const updatedList = todoList.filter((prevTodo) => prevTodo.id !== todo.id);
    setTodoList(updatedList);
  };

  return isEditing ? (
    <li>
      <input type="checkbox" checked={todo.isCompleted} onChange={handleUpdateTodo} />
      <input defaultValue={todo.todo} ref={todoRef} />
      <button data-testid="submit-button" onClick={handleUpdateTodo}>
        완료
      </button>
      <button
        data-testid="cancel-button"
        onClick={() => {
          setIsEditing(false);
        }}
      >
        취소
      </button>
    </li>
  ) : (
    <li>
      <input type="checkbox" checked={todo.isCompleted} onChange={handleUpdateTodo} />
      <input value={todo.todo} ref={todoRef} data-testid="modify-input" readOnly />
      <button
        data-testid="modify-button"
        onClick={() => {
          setIsEditing(true);
        }}
      >
        수정
      </button>
      <button data-testid="delete-button" onClick={handleDeleteClick}>
        삭제
      </button>
    </li>
  );
}
