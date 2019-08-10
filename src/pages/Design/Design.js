import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { login } from "../../store/actions/user";
import { dismissLoginError } from "../../store/actions/errors";

import AppBar from "../../shared/AppBar";
import Select from "../../shared/Select";
import Stepper from "../../shared/Stepper";

const Main = styled.main`
  padding: 22px 0;
`;
const RectButton = styled.button`
  min-width: 126px;

  border: 2px solid rgba(111, 145, 170, 1);
  background: ${({ primary }) =>
    primary ? "rgba(111, 145, 170, 1)" : "transparent"};

  color: ${({ primary }) =>
    primary ? "rgba(255, 255, 255, 1)" : "rgba(111, 145, 170, 1)"};
  line-height: 31px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`;
const Design = ({ login, loading, error, dismissLoginError }) => {
  const [step, setStep] = useState(0);

  const steps = ["STEP 1", "STEP 2", "STEP 3"];
  const handleChangeStep = index => {
    if (index !== step && index >= 0 && index <= steps.length - 1) {
      console.log("Swag");
      setStep(index);
    }
  };
  return (
    <>
      <AppBar right={"swag"} />
      <Main>
        <Stepper steps={["STEP 1", "STEP 2", "STEP 3"]} activeStep={step} />
        <br />
        {/* <Select>
        <option value="" hidden>
          Type
        </option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
      </Select> */}
        {step > 0 && (
          <RectButton onClick={() => handleChangeStep(step - 1)}>
            back
          </RectButton>
        )}
        <RectButton onClick={() => handleChangeStep(step + 1)} primary>
          next step
        </RectButton>
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
