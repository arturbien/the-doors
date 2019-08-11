import React from "react";
import styled from "styled-components";

import { DIMENSIONS } from "../../../config";

import useDimensions from "../../../hooks/useDimensions";

const Door = ({ color, width, height, thickness, beams, posts }) => (
  <DoorFrame color={color} style={{ width, height }} thickness={thickness}>
    <div>
      {[...new Array(beams)].map((_, i) => (
        <span key={i} />
      ))}
    </div>
    <div>
      {[...new Array(posts)].map((_, i) => (
        <span key={i} />
      ))}
    </div>
  </DoorFrame>
);

const View = ({ type, width, height, ...otherProps }) => {
  const [node, dimensions] = useDimensions();
  const scale = dimensions.height / DIMENSIONS.HEIGHT.max;
  let w = scale * width;
  let h = scale * height;
  let thickness = scale * DIMENSIONS.THICKNESS.default;

  return (
    <Wrapper ref={node}>
      {[...new Array(type)].map((_, i) => (
        <Door
          key={i}
          width={w}
          height={h}
          thickness={thickness}
          {...otherProps}
        />
      ))}
    </Wrapper>
  );
};

export default View;

const DoorFrame = styled.div`
  position: relative;
  height: ${({ h }) => (h / DIMENSIONS.HEIGHT.max) * 100}%;
  width: 100px;
  border: ${({ thickness }) => thickness}px solid ${({ color }) => color};
  margin: 0 10px;

  div:first-child,
  div:last-child {
    position: absolute;
    justify-content: space-evenly;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    display: flex;
    span {
      background: ${({ color }) => color};
    }
  }
  div:first-child {
    flex-direction: column;
    span {
      width: 100%;
      height: ${({ thickness }) => thickness}px;
    }
  }
  div:last-child {
    flex-direction: row;
    span {
      height: 100%;
      width: ${({ thickness }) => thickness}px;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
