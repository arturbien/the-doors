import React from "react";
import styled from "styled-components";

const Checkbox = ({ className, style, label, checked, ...props }) => (
  <Wrapper>
    <Label className={className} style={style}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Checkmark viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Checkmark>
      </StyledCheckbox>
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
`;
const LabelText = styled.span`
  margin-left: 15px;

  font-size: 16px;
  line-height: 21px;
  color: #a5a1a1;
  font-weight: normal;
`;
// TODO pick a color of checkmark
const Checkmark = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 28px;
  height: 25px;
  transition: all 150ms;

  border: 1px solid #a5a1a1;

  ${Checkmark} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;
