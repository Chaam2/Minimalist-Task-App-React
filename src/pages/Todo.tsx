/** @jsxImportSource @emotion/react */
import * as todoStyle from '../style/todoStyle';
import { useEffect, useRef, useState } from 'react';
import { createTodo, getTodo } from '../api/Fetcher';
import TodoItem from '../components/TodoItem';
import { useNavigate } from 'react-router-dom';
import { todoType } from '@/@types/todoType';

export default function Todo() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const todoRef = useRef<HTMLInputElement | null>(null);

  const getTodoData = async () => {
    try {
      //@ts-ignore
      const todoData: todoType[] = await getTodo();
      setTodoList(todoData);
    } catch (error) {
      console.error(error);
    }
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
  const handleTodoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (todoRef.current) {
        const todoData = {
          todo: todoRef.current.value,
        };
        //@ts-ignore
        const newTodo: todoType = await createTodo(todoData);
        todoRef.current.value = '';
        setTodoList([...todoList, newTodo]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main role="main" css={todoStyle.main}>
      <section css={todoStyle.imgSection}>
        <img
          css={todoStyle.mainImg}
          src="https://source.unsplash.com/random/?grayscale"
          alt="메인 비주얼 이미지"
        />
      </section>
      <section css={todoStyle.todoSection}>
        <ul css={todoStyle.todoListUl}>
          <li className="listTitle">To-do list</li>
          {todoList.length > 0 && <TodoItem todoList={todoList} setTodoList={setTodoList} />}
        </ul>
        <form css={todoStyle.createForm} onSubmit={handleTodoSubmit}>
          <input
            className="createInput"
            type="text"
            placeholder="+ Add to-do"
            ref={todoRef}
            data-testid="new-todo-input"
            required
          />
          <button className="createButton" data-testid="new-todo-add-button">
            Add
          </button>
        </form>
      </section>
    </main>
  );
}
