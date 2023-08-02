import { useEffect, useRef, useState } from 'react';
import { createTodo, getTodo, updateTodo } from '../api/Fetcher';

export default function Todo() {
  const todoRef = useRef();
  const [todoList, setTodoList] = useState([]);

  // Create Todo
  const handleTodoSubmit = async (e) => {
    e.preventDefault();
    const todoData = {
      todo: todoRef.current.value,
    };
    await createTodo(todoData);
    todoRef.current.value = '';
  };

  const getTodoData = async () => {
    const todoData = await getTodo();
    setTodoList(todoData);
  };
  // Read Todo
  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div>
      <img
        width={200}
        src="https://source.unsplash.com/random/?grayscale"
        alt="메인 비주얼 이미지"
      />
      <ul>
        <li>To-do list</li>
        {todoList.map((todo) => {
          const handleCheckClick = async () => {
            const checkboxData = {
              todo: todo.todo,
              isCompleted: !todo.isCompleted,
            };
            await updateTodo(checkboxData, todo.id);
            await getTodoData();
          };
          return (
            <li key={todo.id}>
              <input type="checkbox" onChange={handleCheckClick} checked={todo.isCompleted} />
              <span>{todo.todo}</span>
              <button>✏️</button>
              <button>🗑️</button>
            </li>
          );
        })}
        <li>
          <input type="checkbox" />
          수정모드
          <button>✅</button>
          <button>❎</button>
        </li>
      </ul>
      <form onSubmit={handleTodoSubmit}>
        <input
          type="text"
          placeholder="+ Add to-do"
          ref={todoRef}
          data-testid="new-todo-input"
          required
        />
        <button data-testid="new-todo-add-button">OK</button>
      </form>
    </div>
  );
}
