import React, { useState } from "react";
import styled from "styled-components";

const Select = ({ items, selectedIndex, onChange, ...otherProps }) => {
  const [index, setIndex] = useState(selectedIndex);
  const [open, setOpen] = useState(false);

  const handleSelect = i => {
    if (onChange) onChange(items[i].value);
    setIndex(i);
  };
  console.log();
  return (
    <Wrapper onClick={() => setOpen(!open)} {...otherProps}>
      {items[index].label}
      {open && (
        <Dropdown>
          {items.map((item, i) => (
            <Option key={i} onClick={() => handleSelect(i)}>
              {item.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  position: relative;
  height: 32px;
  line-height: 32px;
  padding-left: 16px;
  padding-right: 50px;

  border: 1px solid rgba(144, 144, 144, 1);
  border-radius: 3px;
  background: rgba(255, 255, 255, 1);

  font-size: 14px;
  color: rgba(126, 126, 126, 1);
  font-weight: normal;
  cursor: default;
  &:after {
    content: "";
    content: "";
    position: absolute;
    height: 8px;
    width: 8px;
    border-left: 2px solid rgba(144, 144, 144, 1);
    border-bottom: 2px solid rgba(144, 144, 144, 1);
    top: 9px;
    right: 14px;
    transform: rotateZ(-45deg);
  }
`;
const Dropdown = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  border: 1px solid rgba(144, 144, 144, 1);
  border-radius: 3px;
  background: rgba(255, 255, 255, 1);
`;
const Option = styled.li`
  height: 34px;
  line-height: 34px;
  padding-left: 16px;
`;
