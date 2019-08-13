export interface TodoModel {
    id: string,
    title: string,
    content?: string
    createdAt: Date,
    modifiedAt: Date
}

export interface CheckTodoModel extends TodoModel{
    isChecked: boolean,
}

export interface MaybeTodoModel extends CheckTodoModel {
    maybeDate: Date,
}
