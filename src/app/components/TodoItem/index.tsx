import React  from 'react';
import styled from "styled-components";

import Checkbox from "app/components/Checkbox";
import {MaybeTodoModel} from "app/models/todoModels";

type TodoItemProps = {
    todoModel: MaybeTodoModel
};

type TodoItemState = {
    isChecked: false
};

const TodoItem = styled.div`
  
`;

export default ({todoModel} : TodoItemProps) => {
    const [isChecked, setState] = React.useState(false);

    const onToggleCheckbox = () => {
        setState(!isChecked);
    };

    return (
      <TodoItem>
          <Checkbox checked={isChecked} onToggle={onToggleCheckbox}/>
          <div>
              {todoModel.title}
          </div>
      </TodoItem>
    );
}