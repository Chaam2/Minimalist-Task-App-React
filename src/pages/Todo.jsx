import { useEffect, useRef, useState } from 'react';
import { createTodo, getTodo, updateTodo } from '../api/Fetcher';
import TodoItem from '../components/Todo_item';

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
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
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
