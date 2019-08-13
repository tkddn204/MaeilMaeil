// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    todoId
    userId
    name
    description
    createdDate
    modifiedDate
  }
}
`;
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    todoId
    userId
    name
    description
    createdDate
    modifiedDate
  }
}
`;
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    todoId
    userId
    name
    description
    createdDate
    modifiedDate
  }
}
`;
