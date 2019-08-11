import React, { useState } from "react";
import styled from "styled-components";

import Preview from "./Preview/Preview";
import Settings from "./Settings/Settings";

import AppBar from "../../shared/components/AppBar";
import Stepper from "../../shared/components/Stepper";
import RectButton from "../../shared/components/RectButton";

const steps = [
  "step 1\nchoose door",
  "step 2\nchoose door division",
  "step 3\nchoose color"
];
const settingsToDisplay = [
  ["DOOR_TYPE", "DOOR_SIZE"],
  ["DOOR_DIVISION"],
  ["DOOR_COLOR"]
];

const Design = () => {
  const [step, setStep] = useState(0);

  const handleChangeStep = index => {
    if (index !== step && index >= 0 && index <= steps.length - 1) {
      setStep(index);
    }
  };

  return (
    <>
      <AppBar />
      <Main>
        <div>
          <Stepper steps={steps} activeStep={step} />
        </div>
        <div>
          <Configurator>
            <PreviewWrapper>
              <Preview />
            </PreviewWrapper>
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
        </div>
      </Main>
    </>
  );
};

export default Design;

const Main = styled.main`
  padding: 22px 0;
  display: flex;
  flex-direction: column;
`;
const Configurator = styled.section`
  position: relative;
  left: calc(50% + 95px);
  transform: translateX(-50%);
  display: inline-flex;
  height: 472px;
  margin-top: 19px;
`;

const PreviewWrapper = styled.div`
  width: 590px;
  height: 100%;

  padding: 20px;
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
