/** @jsxImportSource @emotion/react */
import * as todoItemStyle from '../style/todoItemStyle';
import { CheckboxLabel, TodoInput } from '../style/todoItemStyle';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useState } from 'react';
import { deleteTodo, updateTodo } from '../api/Fetcher';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoListState';
import EditTodoItem from './EditTodoItem';

export default function TodoItem() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [editingId, setEditingId] = useState(null);

  return (
    <>
      {todoList.map((todo) => {
        // Delete todo
        const handleDeleteClick = async () => {
          await deleteTodo(todo.id);
          const updatedList = todoList.filter((prevTodo) => prevTodo.id !== todo.id);
          setTodoList(updatedList);
        };
        // Update todo
        const handleUpdateTodo = async (e) => {
          console.log(todo.isCompleted);
          const updatedData = {
            todo: todo.todo,
            isCompleted: !todo.isCompleted,
          };
          const updatedTodo = await updateTodo(updatedData, todo.id);
          const updatedList = todoList.map((prevTodo) =>
            prevTodo.id === todo.id ? updatedTodo : prevTodo
          );
          setTodoList(updatedList);
          setEditingId(null);
        };

        return todo.id === editingId ? (
          <EditTodoItem key={todo.id} todo={todo} setEditingId={setEditingId} />
        ) : (
          <li key={todo.id} css={todoItemStyle.todoLi}>
            <CheckboxLabel
              htmlFor={'checkbox_' + todo.id}
              checked={todo.isCompleted}
            ></CheckboxLabel>
            <input
              css={todoItemStyle.checkbox}
              id={'checkbox_' + todo.id}
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleUpdateTodo}
            />
            <TodoInput checked={todo.isCompleted} value={todo.todo} readOnly />
            <button
              data-testid="modify-button"
              onClick={() => {
                setEditingId(todo.id);
              }}
            >
              <AiOutlineEdit size={18} />
            </button>
            <button data-testid="delete-button" onClick={handleDeleteClick}>
              <AiOutlineDelete size={18} />
            </button>
          </li>
        );
      })}
    </>
  );
}
