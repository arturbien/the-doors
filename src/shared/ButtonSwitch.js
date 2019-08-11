import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;
`;
const Button = styled.button`
  width: 36px;
  height: 27px;
  border: 2px solid rgba(111, 145, 170, 1);
  background: ${({ active }) =>
    active ? "rgba(255, 255, 255, 1)" : "rgba(203, 203, 203, 1)"};

  font-size: 14px;
  color: rgba(111, 145, 170, 1);
  font-weight: normal;

  &:not(:first-child) {
    border-left-width: 1px;
  }
`;
// options = [{ name: "2D", value: true }, {name: "3D", value: false}];
const ButtonSwitch = ({ defaultActiveIndex, options, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleChange = i => {
    setActiveIndex(i);
    onChange(options[i].value);
  };

  return (
    <Wrapper>
      {options.map((option, i) => (
        <Button active={i === activeIndex} onClick={() => handleChange(i)}>
          {option.name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default ButtonSwitch;
