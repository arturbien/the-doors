import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  width: 100%;
  height: 32px;
  padding: 7px;

  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 40px;
`;
const Inner = styled.div`
  height: 100%;
  width: ${props => props.percent}%;

  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
`;
const Progress = ({ percent, ...props }) => (
  <Outer {...props}>
    <Inner percent={percent} />
  </Outer>
);

export default Progress;
