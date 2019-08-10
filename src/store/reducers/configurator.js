import {
  SET_DOOR_WIDTH,
  SET_DOOR_HEIGHT,
  SET_DOOR_COLOR,
  SET_DOOR_POSTS,
  SET_DOOR_BEAMS,
  SET_DOOR_TYPE
} from "../actions/actionTypes";

import { COLORS, DOOR_TYPES } from "../../config";

const initialState = {
  width: 120,
  height: 240,
  color: COLORS.BLACK.value,
  posts: 2,
  beams: 4,
  type: DOOR_TYPES.SINGLE.value
};

const stateMap = {
  SET_DOOR_WIDTH: "width",
  SET_DOOR_HEIGHT: "height",
  SET_DOOR_COLOR: "color",
  SET_DOOR_POSTS: "posts",
  SET_DOOR_BEAMS: "beams",
  SET_DOOR_TYPE: "type"
};

const configuratorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOOR_WIDTH:
      const newWidth = action.payload;
      return { ...state, width: newWidth };
    case SET_DOOR_HEIGHT:
      const newHeight = action.payload;
      return { ...state, height: newHeight };
    case SET_DOOR_COLOR:
      const newColor = action.payload;
      return { ...state, color: newColor };
    case SET_DOOR_POSTS:
      const newPosts = action.payload;
      return { ...state, posts: newPosts };
    case SET_DOOR_BEAMS:
      const newBeams = action.payload;
      return { ...state, beams: newBeams };
    case SET_DOOR_TYPE:
      const newType = action.payload;
      return { ...state, type: newType };
    default:
      return state;
  }
};

export default configuratorReducer;
