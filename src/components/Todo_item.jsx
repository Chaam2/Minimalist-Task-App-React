import { useEffect, useRef, useState } from 'react';
import { createTodo, getTodo, updateTodo } from '../api/Fetcher';

export default function TodoItem({ todo }) {
  const handleCheckClick = async () => {
    const checkboxData = {
      todo: todo.todo,
      isCompleted: !todo.isCompleted,
    };
    await updateTodo(checkboxData, todo.id);
    // 리스트 업데이트필요
  };

  return (
    <li>
      <input type="checkbox" checked={todo.isCompleted} onChange={handleCheckClick} />
      <input value={todo.todo} readOnly />
      <button>✏️</button>
      <button>🗑️</button>
    </li>
  );
}
