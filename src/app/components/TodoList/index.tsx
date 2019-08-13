import React, {useState, useEffect}  from 'react';
import styled from "styled-components";

import TodoItem from 'app/components/TodoItem';
import {TodoModel} from "app/models/todoModels";
import {Styled} from "../../../types/global";

interface TodoListProps extends Styled {

}

const TodoList = ({className} : TodoListProps) => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {

    }, []);
    return (
        <div className={className}>
            {todos.map((todoModel) => <TodoItem todoModel={todoModel} />)}
        </div>
    );
};

export default styled(TodoList)`
  width: 300px;
`;
