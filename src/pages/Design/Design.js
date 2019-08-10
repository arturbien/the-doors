import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { login } from "../../store/actions/user";
import { dismissLoginError } from "../../store/actions/errors";

import AppBar from "../../shared/AppBar";
import RectButton from "../../shared/RectButton";
import Stepper from "../../shared/Stepper";
import Divider from "../../shared/Divider";

const Main = styled.main`
  padding: 22px 0;
`;
const Configurator = styled.section`
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
  padding: 28px 28px 0;

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
const Design = ({ login, loading, error, dismissLoginError }) => {
  const [step, setStep] = useState(0);

  const steps = ["STEP 1", "STEP 2", "STEP 3"];
  const handleChangeStep = index => {
    if (index !== step && index >= 0 && index <= steps.length - 1) {
      setStep(index);
    }
  };
  return (
    <>
      <AppBar right={"swag"} />
      <Main>
        <Stepper
          steps={[
            `step 1 \nchoose door`,
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
                  <Text>{"Door type"}</Text>
                  <Divider />
                </>
              )}
              {step === 1 && (
                <>
                  <Text>{"Door division"}</Text>
                  <Divider />
                </>
              )}
              {step === 2 && (
                <>
                  <Text>{"Choose color"}</Text>
                  <Divider />
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
