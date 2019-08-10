import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  justify-content: space-around;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 22px;
    left: 0%;
    right: 0;
    width: 100%;
    height: 2px;
    background: rgba(241, 249, 255, 1);
  }
`;
const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 49px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
const Step = styled.div`
  position: relative;

  display: inline-block;
  width: 46px;
  height: 46px;
  border-radius: 50%;

  background: ${({ active }) =>
    active ? "rgba(255, 255, 255, 1)" : "rgba(105, 145, 178, 1)"};
  border: 20px solid
    ${({ active }) =>
      active ? "rgba(149, 163, 173, 1)" : "rgba(205, 219, 229, 1)"};
`;

const StepLabel = styled.span`
  position: relative;
  margin-top: 11px;

  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  color: rgba(132, 140, 147, 1);
`;

const Stepper = ({ steps, activeStep, ...otherProps }) => {
  console.log(steps);
  return (
    <Wrapper {...otherProps}>
      {steps.map((label, i) => (
        <StepWrapper key={label}>
          <Step active={activeStep === i} />
          <StepLabel>{label}</StepLabel>
        </StepWrapper>
      ))}
    </Wrapper>
  );
};

export default Stepper;
