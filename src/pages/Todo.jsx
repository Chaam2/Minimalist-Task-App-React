import { useEffect, useRef } from 'react';
import { createTodo, getTodo } from '../api/Fetcher';
import TodoItem from '../components/Todo_item';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoListState';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
  const navigate = useNavigate();

  const todoRef = useRef();
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const getTodoData = async () => {
    const todoData = await getTodo();
    setTodoList(todoData);
  };
  // Read Todo
  useEffect(() => {
    if (!localStorage.getItem('Token')) {
      navigate('/signin');
      return;
    }
    getTodoData();
  }, []);

  // Create Todo
  const handleTodoSubmit = async (e) => {
    e.preventDefault();
    const todoData = {
      todo: todoRef.current.value,
    };
    const newTodo = await createTodo(todoData);
    todoRef.current.value = '';
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <img
        width={200}
        src="https://source.unsplash.com/random/?grayscale"
        alt="메인 비주얼 이미지"
      />
      <ul>
        <li>To-do list</li>
        {todoList.length > 0 && todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
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
