import React from "react";
import styled from "styled-components";

import Radio from "../../shared/Radio";
import LabelText from "../../shared/LabelText";

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ColorOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-right: 28px;
`;
const ColorPreview = styled.span`
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

// EXAMPLE:
// colors = [{ name: "Black", value: "#000000" }];
// activeColor =  "#000000";

const ColorSelect = ({ colors, activeColor, onChange }) => {
  return (
    <Colors>
      {colors.map(color => (
        <ColorOption key={color.value}>
          <ColorPreview
            color={color.value}
            onClick={() => onChange(color.value)}
          />
          <Radio
            onChange={() => onChange(color.value)}
            value={color.value}
            checked={color.value === activeColor}
            // name="type"
            label={<LabelText>{color.name}</LabelText>}
          />
        </ColorOption>
      ))}
    </Colors>
  );
};

export default ColorSelect;
