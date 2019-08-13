import React  from 'react';
import styled  from "styled-components";
import {Styled} from "../../../types/global";

interface CheckboxProps extends Styled {
    checked?: boolean,
    onClick?(): void
}

const Checkbox = ({className, checked = false, onClick} : CheckboxProps) => {
    return (
        <div
            className={className}
            onClick={onClick}>
        </div>
    );
};

export default styled(Checkbox)`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: ${props => props.checked ? "black" : "white"}
  
  :hover {
    cursor: pointer;
  }
`;