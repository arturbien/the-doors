import React, { useState } from "react";
import styled from "styled-components";

import Settings from "./Settings/Settings";
import AppBar from "../../shared/AppBar";
import RectButton from "../../shared/RectButton";
import Stepper from "../../shared/Stepper";

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
  padding-left: 28px;
`;

const StepperNav = styled.nav`
  display: inline-flex;
  padding-left: 5px;

  ${RectButton}:first-child {
    margin-right: 14px;
  }
`;

const Design = ({ login, loading, error, dismissLoginError }) => {
  const [step, setStep] = useState(0);

  const steps = [
    `step 1\nchoose door`,
    "step 2\nchoose door division",
    "step 3\nchoose color"
  ];
  const handleChangeStep = index => {
    if (index !== step && index >= 0 && index <= steps.length - 1) {
      setStep(index);
    }
  };
  const settingsToDisplay = [
    ["DOOR_TYPE", "DOOR_SIZE"],
    ["DOOR_DIVISION"],
    ["DOOR_COLOR"]
  ];
  return (
    <>
      <AppBar />
      <Main>
        <Stepper steps={steps} activeStep={step} />

        <Configurator>
          <Preview>sasd</Preview>

          <Sidebar>
            <Settings settingsToDisplay={settingsToDisplay[step]} />

            <StepperNav>
              {step > 0 && (
                <RectButton onClick={() => handleChangeStep(step - 1)}>
                  back
                </RectButton>
              )}
              <RectButton onClick={() => handleChangeStep(step + 1)} primary>
                next step
              </RectButton>
            </StepperNav>
          </Sidebar>
        </Configurator>
      </Main>
    </>
  );
};

export default Design;
