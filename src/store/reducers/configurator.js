import {
  SET_DOOR_WIDTH,
  SET_DOOR_HEIGHT,
  SET_DOOR_COLOR,
  SET_DOOR_POSTS,
  SET_DOOR_BEAMS,
  SET_DOOR_TYPE
} from "../actions/actionTypes";

import { COLORS, DOOR_TYPES, DIMENSIONS, STRUCTURE } from "../../config";

const initialState = {
  width: DIMENSIONS.WIDTH.default,
  height: DIMENSIONS.HEIGHT.default,
  color: COLORS.BLACK.value,
  posts: STRUCTURE.POSTS.default,
  beams: STRUCTURE.BEAMS.default,
  type: DOOR_TYPES.SINGLE.value
};

const clamp = (value, min, max) =>
  Math.min(Math.max(parseInt(value), min), max);

const configuratorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOOR_WIDTH:
      const newWidth = clamp(
        action.payload,
        DIMENSIONS.WIDTH.min,
        DIMENSIONS.WIDTH.max
      );
      return { ...state, width: newWidth };
    case SET_DOOR_HEIGHT:
      const newHeight = clamp(
        action.payload,
        DIMENSIONS.HEIGHT.min,
        DIMENSIONS.HEIGHT.max
      );
      return { ...state, height: newHeight };
    case SET_DOOR_COLOR:
      const newColor = action.payload;
      return { ...state, color: newColor };
    case SET_DOOR_POSTS:
      const newPosts = clamp(
        action.payload,
        STRUCTURE.POSTS.min,
        STRUCTURE.POSTS.max
      );
      return { ...state, posts: newPosts };
    case SET_DOOR_BEAMS:
      const newBeams = clamp(
        action.payload,
        STRUCTURE.BEAMS.min,
        STRUCTURE.BEAMS.max
      );
      return { ...state, beams: newBeams };
    case SET_DOOR_TYPE:
      const newType = parseInt(action.payload);
      return { ...state, type: newType };
    default:
      return state;
  }
};

export default configuratorReducer;
