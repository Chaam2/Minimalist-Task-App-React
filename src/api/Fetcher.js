import Api from './Api';

// Auth
export async function postSignup(data) {
  return await Api.post('/auth/signup', data);
}
export async function postSignin(data) {
  return await Api.post('/auth/signin', data);
}

// Todo
export async function getTodo() {
  return await Api.get('/todos');
}
export async function createTodo(data) {
  return await Api.post('/todos', data);
}
export async function updateTodo(data, todoId) {
  return await Api.put(`/todos/${todoId}`, data);
}
export async function deleteTodo(todoId) {
  return await Api.delete(`/todos/${todoId}`);
}
