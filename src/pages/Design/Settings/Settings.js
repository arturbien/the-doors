import React, { useState } from "react";
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

import ColorsSelect from "../ColorsSelect";

import InfoIcon from "../../../assets/images/icon.svg";

import Radio from "../../../shared/Radio";
import Modal from "../../../shared/Modal";
import Divider from "../../../shared/Divider";
import LabelText from "../../../shared/LabelText";
import NumberInput from "../../../shared/NumberInput";
import SpinnerInput from "../../../shared/SpinnerInput";
import CloseButton from "../../../shared/CloseButton";

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
const Info = styled.span`
  position: absolute;
  top: 0px;
  right: -11px;
  display: inline-block;
  height: 10px;
  width: 10px;
  background: url(${InfoIcon});
  background-size: cover;
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

const InfoWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 813px;
  height: 432px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(121, 152, 176, 1);
`;
const InfoHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 40px 90px 29px 29px;

  ${CloseButton} {
    position: absolute;
    top: 20px;
    right: 41px;
  }
`;
const InfoHeading = styled.h4`
  font-size: 24px;
  line-height: 32px;
  color: rgba(111, 145, 170, 1);
  padding-bottom: 7px;
  margin: 0;
  border-bottom: 1px solid rgba(111, 145, 170, 1);
`;
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
  const [typeInfoOpen, setTypeInfoOpen] = useState(false);

  const typeSettings = (
    <Fieldset>
      <LabelText as="legend">
        {"Door type"}
        <Info onClick={() => setTypeInfoOpen(true)} />
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
      {typeInfoOpen && (
        <Modal>
          <InfoWrapper>
            <InfoHeader>
              <InfoHeading>{"Door type"}</InfoHeading>
              <CloseButton
                onClick={() => setTypeInfoOpen(false)}
                color="rgba(111, 145, 170, 1)"
              />
            </InfoHeader>
          </InfoWrapper>
        </Modal>
      )}
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
      <ColorsSelect
        colors={Object.keys(COLORS).map(colorID => COLORS[colorID])}
        activeColor={color}
        onChange={setDoorColor}
      />
    </Fieldset>
  );

  const settings = {
    DOOR_TYPE: typeSettings,
    DOOR_SIZE: sizeSettings,
    DOOR_DIVISION: divisionSettings,
    DOOR_COLOR: colorSettings
  };
  return (
    <Wrapper>
      {settingsToDisplay.map(setting => (
        <React.Fragment key={setting}>{settings[setting]}</React.Fragment>
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
