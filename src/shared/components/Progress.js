import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  padding: 7px;

  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 40px;
`;
const Inner = styled.div`
  height: 100%;
  transition: 0.025s all ease-in-out;
  width: ${({ percent }) => percent}%;

  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
`;
const Percent = styled.span`
  position: absolute;
  right: 18px;
  top: 0;
  font-size: 14px;
  line-height: 32px;
  color: rgba(255, 255, 255, 1);
  font-weight: normal;
`;
const Progress = ({ percent, ...otherProps }) => {
  return (
    <Outer {...otherProps}>
      <Inner percent={percent} />
      <Percent>{percent}%</Percent>
    </Outer>
  );
};

export default Progress;
