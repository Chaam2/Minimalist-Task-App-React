import { userType } from '@/@types/userType';
import Api from './Api';
import { todoType } from '@/@types/todoType';

// Auth
export async function postSignup(data: userType) {
  return await Api.post('/auth/signup', data);
}
export async function postSignin(data: userType) {
  return await Api.post('/auth/signin', data);
}

// Todo
export async function getTodo() {
  return await Api.get('/todos');
}
export async function createTodo(data: Pick<todoType, 'todo'>) {
  return await Api.post('/todos', data);
}
export async function updateTodo(
  data: Pick<todoType, 'todo' | 'isCompleted'>,
  todoId: Pick<todoType, 'id'>
) {
  return await Api.put(`/todos/${todoId}`, data);
}
export async function deleteTodo(todoId: Pick<todoType, 'id'>) {
  return await Api.delete(`/todos/${todoId}`);
}
