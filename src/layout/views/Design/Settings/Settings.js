import React from "react";
import styled from "styled-components";

import { withTranslation } from "react-i18next";

import { connect } from "react-redux";
import {
  setDoorWidth,
  setDoorHeight,
  setDoorColor,
  setDoorPosts,
  setDoorBeams,
  setDoorType
} from "../../../../store/actions/configurator";

import { DOOR_TYPES, COLORS, STRUCTURE } from "../../../../config";

import TypeInfo from "./TypeInfo";

import Radio from "../../../../shared/components/Radio";
import Divider from "../../../../shared/components/Divider";
import LabelText from "../../../../shared/components/LabelText";
import ColorSelect from "../../../../shared/components/ColorSelect";
import NumberInput from "../../../../shared/components/NumberInput";
import SpinnerInput from "../../../../shared/components/SpinnerInput";

class Settings extends React.Component {
  renderTypeSettings = () => {
    const { type, setDoorType, t } = this.props;
    return (
      <Fieldset>
        <LabelText as="legend">
          {t("doorType")}
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
              label={<LabelText>{t(DOOR_TYPES[doorType].name)}</LabelText>}
            />
            <br />
          </React.Fragment>
        ))}
      </Fieldset>
    );
  };
  // TODO debounce size action dispatch
  //TODO handle situation when size is smaller than minimum
  renderSizeSettings = () => {
    const { width, setDoorWidth, height, setDoorHeight, t } = this.props;
    return (
      <SizeFieldset>
        <LabelText as="legend">{t("doorSize")}</LabelText>
        <Divider />
        <Field>
          <label htmlFor="width">
            <LabelText>{t("width")}</LabelText>
          </label>
          <NumberInput
            value={width}
            min={30}
            name="width"
            onChange={e => setDoorWidth(e.target.value)}
          />
          <Suffix>cm</Suffix>
        </Field>
        <Field>
          <label htmlFor="height">
            <LabelText>{t("height")}</LabelText>
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
  };
  renderDivisionSettings = () => {
    const { beams, setDoorBeams, posts, setDoorPosts, t } = this.props;

    return (
      <DivisionFieldset>
        <LabelText as="legend">{t("doorDivision")}</LabelText>
        <Divider />

        <Field>
          <label htmlFor="beams">
            <LabelText>{t("numberOfBeams")}</LabelText>
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
            <LabelText>{t("numberOfPosts")}</LabelText>
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
  };
  renderColorSettings = () => {
    const { color, setDoorColor, t } = this.props;
    const colors = Object.keys(COLORS).map(colorID => {
      const colorObj = { ...COLORS[colorID] };
      colorObj.name = t(`colors.${colorObj.name}`);
      return colorObj;
    });
    return (
      <Fieldset>
        <LabelText as="legend">{t("chooseColor")}</LabelText>
        <Divider />
        <ColorSelect
          colors={colors}
          activeColor={color}
          onChange={setDoorColor}
        />
      </Fieldset>
    );
  };

  render() {
    const { settingsToDisplay } = this.props;

    const settingsMap = {
      DOOR_TYPE: this.renderTypeSettings,
      DOOR_SIZE: this.renderSizeSettings,
      DOOR_DIVISION: this.renderDivisionSettings,
      DOOR_COLOR: this.renderColorSettings
    };
    return (
      <Wrapper>
        {settingsToDisplay.map(setting => (
          <React.Fragment key={setting}>
            {settingsMap[setting]()}
          </React.Fragment>
        ))}
      </Wrapper>
    );
  }
}

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
)(withTranslation()(Settings));

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
    min-width: 55px;
  }
  ${NumberInput} {
    width: 44px;
    flex-shrink: 0;
    margin-left: 15px;
  }
`;
const Suffix = styled(LabelText)`
  margin-left: 5px;
`;
