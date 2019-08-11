import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import View2D from "./View2D";

import ButtonSwitch from "../../../../shared/components/ButtonSwitch";

const Wrapper = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
`;
const Preview = props => {
  const [is2D, set2D] = useState(true);

  return (
    <Wrapper>
      {is2D ? <View2D {...props} /> : null}
      <Nav>
        <ButtonSwitch
          onChange={set2D}
          options={[{ name: "3D", value: false }, { name: "2D", value: true }]}
          defaultActiveIndex={1}
        />
      </Nav>
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

export default connect(
  mapStateToProps,
  null
)(Preview);
