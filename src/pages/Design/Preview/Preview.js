import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import {
  DIMENSIONS
  // STRUCTURE
} from "../../../config";

const structureWidth = 5;

const Door = styled.div`
  position: relative;
  height: ${({ height }) => (height / DIMENSIONS.HEIGHT.max) * 100}%;
  width: 100px;
  border: ${structureWidth}px solid ${({ color }) => color};
  margin: 0 10px;
`;
const DoorWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TwoDimensional = ({ type, ...otherProps }) => (
  <DoorWrapper>
    {[...new Array(type)].map((n, i) => (
      <Door key={i} {...otherProps} />
    ))}
  </DoorWrapper>
);
const Preview = props => <TwoDimensional {...props} />;

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
