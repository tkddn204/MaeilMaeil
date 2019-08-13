import React  from 'react';
import styled from "styled-components";

import Checkbox from "app/components/Checkbox";
import {TodoModel} from "app/models/todoModels";
import {Styled} from "../../../types/global";
import TodoContent from "app/components/TodoContent/TodoContent";

interface TodoItemProps extends Styled {
    todoModel: TodoModel
}

const TodoItem = ({className, todoModel} : TodoItemProps) => {
    const [isChecked, setState] = React.useState(false);

    const toggleCheckbox = () => {
        setState(!isChecked);
    };

    return (
        <div className={className}>
            <Checkbox checked={isChecked} onClick={toggleCheckbox}/>
            <TodoContent content={todoModel.title} />
        </div>
    );
}

export default styled(TodoItem)`
  
`;
