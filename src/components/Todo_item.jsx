import { updateTodo } from '../api/Fetcher';

import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoListState';

export default function TodoItem({ todo }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleUpdateTodo = async () => {
    const checkboxData = {
      todo: todo.todo,
      isCompleted: !todo.isCompleted,
    };
    const updatedTodo = await updateTodo(checkboxData, todo.id);
    const updatedList = todoList.map((prevTodo) =>
      prevTodo.id === todo.id ? updatedTodo : prevTodo
    );
    setTodoList(updatedList);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.isCompleted} onChange={handleUpdateTodo} />
      <input value={todo.todo} readOnly />
      <button>✏️</button>
      <button>🗑️</button>
    </li>
  );
}
