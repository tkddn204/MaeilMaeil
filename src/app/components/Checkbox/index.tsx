import React  from 'react';
import styled  from "styled-components";

interface CheckboxProps {
    checked?: boolean,
    onToggle?(): void,
    className?: string
}

const Checkbox = ({checked = false, onToggle, className} : CheckboxProps) => {
    return (
        <div className={className} onClick={onToggle}>
        </div>
    );
};

export default styled(Checkbox)`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: ${props => props.checked ? "black" : "white"}
  
  :hover {
    cursor: pointer;
  }
`;