// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    todoId
    userId
    name
    description
    createdDate
    modifiedDate
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      todoId
      userId
      name
      description
      createdDate
      modifiedDate
    }
    nextToken
  }
}
`;
