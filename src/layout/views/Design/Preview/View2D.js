import React from "react";
import styled from "styled-components";

import { DOOR_TYPES, COLORS, DIMENSIONS, STRUCTURE } from "../../../../config";

import useDimensions from "../../../../shared/hooks/useDimensions";

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

const Dimensions = ({ type, width, height, offset = 30 }) => (
  <DimensionsWrapper offset={offset} type={type}>
    <div>
      <span>{type * width}</span>
    </div>
    <div>
      <span>{width}</span>
    </div>
    <div>
      <span>{height}</span>
    </div>
  </DimensionsWrapper>
);
const View = ({
  type = DOOR_TYPES.SINGLE.value,
  color = COLORS.BLACK.value,
  width = DIMENSIONS.WIDTH.default,
  height = DIMENSIONS.HEIGHT.default,
  thickness = DIMENSIONS.THICKNESS.default,
  beams = STRUCTURE.BEAMS.default,
  posts = STRUCTURE.POSTS.default,
  showDimensions = true
}) => {
  const [node, dimensions] = useDimensions();
  const scale = (dimensions.height * 0.7 || 260) / DIMENSIONS.HEIGHT.max;
  let w = scale * width;
  let h = scale * height;
  let t = scale * thickness;
  return (
    <ViewWrapper ref={node}>
      <ViewInner>
        {showDimensions && (
          <Dimensions type={type} width={width} height={height} />
        )}
        {[...new Array(type)].map((_, i) => (
          <Door
            key={i}
            width={w}
            height={h}
            thickness={t}
            color={color}
            beams={beams}
            posts={posts}
          />
        ))}
      </ViewInner>
    </ViewWrapper>
  );
};

export default View;

const DoorFrame = styled.div`
  position: relative;
  height: ${({ h }) => (h / DIMENSIONS.HEIGHT.max) * 100}%;
  width: 100px;
  border: ${({ thickness }) => thickness}px solid ${({ color }) => color};
  margin: 0 ${({ thickness }) => thickness / 10}px;

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
const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ViewInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const DimensionsWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  div:nth-child(1),
  div:nth-child(2),
  div:nth-child(3) {
    position: absolute;

    &:after {
      content: "";
      position: absolute;
      background: rgba(112, 112, 112, 1);
    }
  }
  div:nth-child(1) {
    top: 0;
    width: 100%;
    transform: translateY(-${({ offset }) => offset}px);
  }
  div:nth-child(2) {
    display: ${({ type }) => (type === 1 ? "none" : "initial")};
    bottom: 0;
    width: ${({ type }) => 100 / type}%;
    transform: translateY(${({ offset }) => offset}px);
  }
  div:nth-child(1),
  div:nth-child(2) {
    height: 13px;
    border-left: 2px solid rgba(112, 112, 112, 1);
    border-right: 2px solid rgba(112, 112, 112, 1);
    &:after {
      top: 6px;
      left: 0;
      width: 100%;
      height: 1px;
    }
  }
  div:nth-child(3) {
    top: 0;
    left: 0;
    height: 100%;
    width: 13px;
    transform: translateX(-${({ offset }) => offset}px);
    border-top: 2px solid rgba(112, 112, 112, 1);
    border-bottom: 2px solid rgba(112, 112, 112, 1);
    &:after {
      left: 6px;
      top: 0;
      height: 100%;
      width: 1px;
    }
  }
  div > span {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    display: inline-block;
    padding: 3px 6px 1px 6px;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(112, 112, 112, 1);

    font-size: 12px;
    color: rgba(132, 140, 147, 1);
  }
`;
