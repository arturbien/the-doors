import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import {
  setDoorWidth,
  setDoorHeight,
  setDoorColor,
  setDoorPosts,
  setDoorBeams,
  setDoorType
} from "../../../store/actions/configurator";

import { DOOR_TYPES, COLORS, STRUCTURE } from "../../../config";

import TypeInfo from "./TypeInfo";

import Radio from "../../../shared/components/Radio";
import Divider from "../../../shared/components/Divider";
import LabelText from "../../../shared/components/LabelText";
import ColorSelect from "../../../shared/components/ColorSelect";
import NumberInput from "../../../shared/components/NumberInput";
import SpinnerInput from "../../../shared/components/SpinnerInput";

const Settings = ({
  // from the outside
  settingsToDisplay,
  // from the store
  height,
  width,
  color,
  posts,
  beams,
  type,
  setDoorHeight,
  setDoorWidth,
  setDoorColor,
  setDoorPosts,
  setDoorBeams,
  setDoorType
}) => {
  const typeSettings = (
    <Fieldset>
      <LabelText as="legend">
        {"Door type"}
        <TypeInfo />
      </LabelText>
      <Divider />
      {Object.keys(DOOR_TYPES).map(doorType => (
        <React.Fragment key={DOOR_TYPES[doorType].value}>
          <Radio
            onChange={e => setDoorType(e.target.value)}
            value={DOOR_TYPES[doorType].value}
            checked={type === DOOR_TYPES[doorType].value}
            name="type"
            label={<LabelText>{DOOR_TYPES[doorType].name}</LabelText>}
          />
          <br />
        </React.Fragment>
      ))}
    </Fieldset>
  );
  const sizeSettings = (
    <SizeFieldset>
      <LabelText as="legend">{"Door size"}</LabelText>
      <Divider />
      <Field>
        <label htmlFor="width">
          <LabelText>{"Width"}</LabelText>
        </label>
        <NumberInput
          value={width}
          name="width"
          onChange={e => setDoorWidth(e.target.value)}
        />
        <Suffix>cm</Suffix>
      </Field>
      <Field>
        <label htmlFor="height">
          <LabelText>{"Height"}</LabelText>
        </label>
        <NumberInput
          value={height}
          name="height"
          onChange={e => setDoorHeight(e.target.value)}
        />
        <Suffix>cm</Suffix>
      </Field>
    </SizeFieldset>
  );
  const divisionSettings = (
    <DivisionFieldset>
      <LabelText as="legend">{"Door division"}</LabelText>
      <Divider />

      <Field>
        <label htmlFor="beams">
          <LabelText>{"Number of beams"}</LabelText>
        </label>
        <SpinnerInput
          onChange={setDoorBeams}
          value={beams}
          max={STRUCTURE.BEAMS.max}
          min={STRUCTURE.BEAMS.min}
          name="beams"
        />
      </Field>
      <Field>
        <label htmlFor="posts">
          <LabelText>{"Number of posts"}</LabelText>
        </label>
        <SpinnerInput
          onChange={setDoorPosts}
          value={posts}
          max={STRUCTURE.POSTS.max}
          min={STRUCTURE.POSTS.min}
          name="posts"
        />
      </Field>
    </DivisionFieldset>
  );
  const colorSettings = (
    <Fieldset>
      <LabelText as="legend">{"Choose color"}</LabelText>
      <Divider />
      <ColorSelect
        colors={Object.keys(COLORS).map(colorID => COLORS[colorID])}
        activeColor={color}
        onChange={setDoorColor}
      />
    </Fieldset>
  );

  const settingsMap = {
    DOOR_TYPE: typeSettings,
    DOOR_SIZE: sizeSettings,
    DOOR_DIVISION: divisionSettings,
    DOOR_COLOR: colorSettings
  };
  return (
    <Wrapper>
      {settingsToDisplay.map(setting => (
        <React.Fragment key={setting}>{settingsMap[setting]}</React.Fragment>
      ))}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  const { width, height, color, posts, beams, type } = state.configurator;
  return {
    width,
    height,
    color,
    posts,
    beams,
    type
  };
};
const mapDispatchToProps = dispatch => ({
  setDoorHeight: val => dispatch(setDoorHeight(val)),
  setDoorWidth: val => dispatch(setDoorWidth(val)),
  setDoorColor: val => dispatch(setDoorColor(val)),
  setDoorPosts: val => dispatch(setDoorPosts(val)),
  setDoorBeams: val => dispatch(setDoorBeams(val)),
  setDoorType: val => dispatch(setDoorType(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Fieldset = styled.fieldset`
  display: inline-block;
  margin-top: 28px;

  width: 280px;
  ${Divider} {
    max-width: 153px;
  }
`;
const Field = styled.div`
  display: flex;
  align-items: center;
  width: 130px;
  padding: 3px 0;
`;

const DivisionFieldset = styled(Fieldset)`
  label {
    width: 126px;
  }
  ${Field} {
    width: auto;
  }
`;
const SizeFieldset = styled(Fieldset)`
  label {
    width: 65px;
  }
  ${NumberInput} {
    max-width: 44px;
  }
`;
const Suffix = styled(LabelText)`
  margin-left: 5px;
`;
