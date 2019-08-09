export interface TodoModel {
    id: string,
    title: string,
    createdDate: Date,
    modifiedDate: Date
}

export interface CheckTodoModel extends TodoModel{
    isChecked: boolean,
}

export interface MaybeTodoModel extends CheckTodoModel {
    maybeDate: Date,
}