import React from "react";
import styled, { css } from "styled-components";

const Checkbox = ({ className, style, label, checked, ...otherProps }) => (
  <Wrapper>
    <Label className={className} style={style}>
      <HiddenRadio checked={checked} {...otherProps} />
      <StyledRadio checked={checked} />
      {label && <LabelText>{label}</LabelText>}
    </Label>
  </Wrapper>
);

export default Checkbox;

const Wrapper = styled.div`
  display: inline-block;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 4px 0;
`;
const LabelText = styled.span`
  margin-left: 5px;

  font-size: 16px;
  line-height: 21px;
  color: #a5a1a1;
  font-weight: normal;
`;
const HiddenRadio = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const StyledRadio = styled.div`
  position: relative;
  display: inline-block;

  width: 16px;
  height: 16px;

  border-radius: 50%;
  border: 3px solid #cddbe5;
  background: transparent;

  ${({ checked }) =>
    checked &&
    css`
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        width: 7px;
        height: 7px;

        border-radius: 50%;
        background: #6991b2;
      }
    `};
`;
