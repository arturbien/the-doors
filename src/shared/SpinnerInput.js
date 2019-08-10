import React, { useState } from "react";
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

const Spinner = ({ onChange, initialValue, min, max, ...otherProps }) => {
  const [val, setVal] = useState(initialValue);

  const handleChange = value => {
    if ((max && value > max) || (min && value < min)) {
      return;
    } else {
      setVal(value);
    }
  };
  return (
    <Wrapper>
      <NumberInput value={val} {...otherProps} />
      <Button onClick={() => handleChange(val + 1)}>+</Button>
      <Button onClick={() => handleChange(val - 1)}>-</Button>
    </Wrapper>
  );
};

export default Spinner;
