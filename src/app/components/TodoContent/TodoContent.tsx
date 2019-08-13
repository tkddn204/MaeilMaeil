import React  from 'react';
import styled from "styled-components";
import {Styled} from "../../../types/global";

interface TodoContentProps extends Styled {
    content?: string
}

const TodoItem = ({className, content} : TodoContentProps) => {
    return (
        <span className={className}>{content}</span>
    );
};

export default styled(TodoItem)`
`;