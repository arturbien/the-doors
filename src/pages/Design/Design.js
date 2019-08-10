import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { login } from "../../store/actions/user";
import { dismissLoginError } from "../../store/actions/errors";

import AppBar from "../../shared/AppBar";
import RectButton from "../../shared/RectButton";
import Stepper from "../../shared/Stepper";
import Divider from "../../shared/Divider";
import Radio from "../../shared/Radio";
import NumberInput from "../../shared/NumberInput";
import SpinnerInput from "../../shared/SpinnerInput";

const Main = styled.main`
  padding: 22px 0;
`;
const Configurator = styled.section`
  position: relative;
  left: 50%;
  transform: translateX(-332px);
  display: flex;
  height: 472px;
  margin-top: 19px;
`;

const Preview = styled.div`
  width: 590px;
  height: 100%;

  border: 1px solid #e6e6e6;
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 28px;

  border: 1px solid red;
`;
const Text = styled.span`
  font-size: 14px;
  line-height: 19px;
  color: #848c93;
  font-weight: normal;
`;
const StepperNavigation = styled.nav`
  display: inline-flex;
  padding-left: 5px;

  ${RectButton}:first-child {
    margin-right: 14px;
  }
`;
const Field = styled.div`
  display: flex;
  align-items: center;
  width: 130px;
  padding: 3px 0;
`;
const Fieldset = styled.fieldset`
  margin-top: 28px;
`;
const TypeSettings = styled(Fieldset)``;
const StructureSettings = styled(Fieldset)`
  label {
    width: 126px;
  }
  ${Field} {
    width: auto;
  }
`;
const SizeSettings = styled(Fieldset)`
  label {
    width: 65px;
  }
  ${NumberInput} {
    max-width: 44px;
  }
`;
const ColorSettings = styled(Fieldset)``;
const Suffix = styled(Text)`
  margin-left: 5px;
`;
const ColorSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ColorOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-right: 28px;
  /* width: 33%; */
`;
const ColorPreview = styled.span`
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;
// TODO programatically add DOOR_TYPES options etc
const DOOR_TYPES = {
  SINGLE: "SINGLE",
  DOUBLE: "DOUBLE"
};
const COLORS = {
  BLACK: "#000000",
  WHITE: "#F4F2F2",
  GRAY: "#797474",
  NEON: "#1DE278",
  SKY: "#2699FB"
};
const Design = ({ login, loading, error, dismissLoginError }) => {
  const [step, setStep] = useState(2);
  const [doorType, setDoorType] = useState(DOOR_TYPES.SINGLE);
  const [color, setColor] = useState(COLORS.BLACK);

  const steps = ["STEP 1", "STEP 2", "STEP 3"];
  const handleChangeStep = index => {
    if (index !== step && index >= 0 && index <= steps.length - 1) {
      setStep(index);
    }
  };
  const handleChangeType = e => {
    setDoorType(e.target.value);
  };
  const handleChangeColor = e => {
    const newColor = e.target.value;
    if (newColor !== color) {
      setColor(e.target.value);
    }
  };
  return (
    <>
      <AppBar right={"swag"} />
      <Main>
        <Stepper
          steps={[
            `step 1\nchoose door`,
            "step 2\nchoose door division",
            "step 3\nchoose color"
          ]}
          activeStep={step}
        />

        <Configurator>
          <Preview>sasd</Preview>
          <Sidebar>
            <div>
              {step === 0 && (
                <>
                  <TypeSettings>
                    <Text as="legend">{"Door type"}</Text>
                    <Divider />
                    <Radio
                      onChange={handleChangeType}
                      value={DOOR_TYPES.SINGLE}
                      checked={doorType === DOOR_TYPES.SINGLE}
                      // name="type"
                      label={<Text>{"Single door"}</Text>}
                    />
                    <br />
                    <Radio
                      onChange={handleChangeType}
                      value={DOOR_TYPES.DOUBLE}
                      checked={doorType === DOOR_TYPES.DOUBLE}
                      // name="type"
                      label={<Text>{"Double door"}</Text>}
                    />
                  </TypeSettings>
                  <br />

                  <SizeSettings>
                    <Text as="legend">{"Door size"}</Text>
                    <Divider />
                    <Field>
                      <label htmlFor="width">
                        <Text>{"Width"}</Text>
                      </label>
                      <NumberInput
                        value={120}
                        name="width"
                        onChange={e => e.target.value}
                      />
                      <Suffix>cm</Suffix>
                    </Field>
                    <Field>
                      <label htmlFor="height">
                        <Text>{"Height"}</Text>
                      </label>
                      <NumberInput defaultValue={250} name="height" />
                      <Suffix>cm</Suffix>
                    </Field>
                  </SizeSettings>
                </>
              )}
              {step === 1 && (
                <>
                  <StructureSettings>
                    <Text as="legend">{"Door division"}</Text>
                    <Divider />

                    <Field>
                      <label htmlFor="beams">
                        <Text>{"Number of beams"}</Text>
                      </label>
                      <SpinnerInput value={120} max={100} name="beams" />
                    </Field>
                    <Field>
                      <label htmlFor="posts">
                        <Text>{"Number of posts"}</Text>
                      </label>
                      <SpinnerInput value={120} max={100} name="posts" />
                    </Field>
                  </StructureSettings>
                </>
              )}
              {step === 2 && (
                <>
                  <ColorSettings>
                    <Text as="legend">{"Choose color"}</Text>
                    <Divider />
                    <ColorSelect>
                      {Object.keys(COLORS).map(colorName => (
                        <ColorOption key={colorName}>
                          <ColorPreview
                            color={COLORS[colorName]}
                            onClick={() => setColor(COLORS[colorName])}
                          />
                          <Radio
                            onChange={handleChangeColor}
                            value={COLORS[colorName]}
                            checked={color === COLORS[colorName]}
                            // name="type"
                            label={<Text>{colorName}</Text>}
                          />
                        </ColorOption>
                      ))}
                    </ColorSelect>
                  </ColorSettings>
                </>
              )}
            </div>
            <StepperNavigation>
              {step > 0 && (
                <RectButton onClick={() => handleChangeStep(step - 1)}>
                  back
                </RectButton>
              )}
              <RectButton onClick={() => handleChangeStep(step + 1)} primary>
                next step
              </RectButton>
            </StepperNavigation>
          </Sidebar>
        </Configurator>
      </Main>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading.login,
    error: state.errors.login
  };
};
const mapDispatchToProps = dispatch => ({
  login: ({ email, password, remember }) =>
    dispatch(login({ email, password, remember })),
  dismissLoginError: () => dispatch(dismissLoginError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Design);
