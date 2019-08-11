import React from "react";
import styled from "styled-components";

import NumberInput from "./NumberInput";

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  ${NumberInput} {
    width: 24px;
  }
`;

const Button = styled.button`
  flex-shrink: 0;
  height: 24px;
  width: 24px;
  background: #cddbe5;
  color: #848c93;
  font-size: 12px;
  font-weight: normal;
`;

const Spinner = ({ onChange, value, min, max, ...otherProps }) => {
  const handleChange = val => {
    val = parseInt(val);
    if ((max !== undefined && val > max) || (min !== undefined && val < min)) {
      return;
    } else {
      onChange(val);
    }
  };
  return (
    <Wrapper>
      <NumberInput
        onChange={e => handleChange(e.target.value)}
        value={value}
        {...otherProps}
      />
      <Button onClick={() => handleChange(value + 1)}>+</Button>
      <Button onClick={() => handleChange(value - 1)}>-</Button>
    </Wrapper>
  );
};

export default Spinner;
