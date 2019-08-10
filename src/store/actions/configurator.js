import {
  SET_DOOR_WIDTH,
  SET_DOOR_HEIGHT,
  SET_DOOR_COLOR,
  SET_DOOR_POSTS,
  SET_DOOR_BEAMS,
  SET_DOOR_TYPE
} from "./actionTypes";

export const setDoorWidth = width => ({ type: SET_DOOR_WIDTH, payload: width });
export const setDoorHeight = height => ({
  type: SET_DOOR_HEIGHT,
  payload: height
});
export const setDoorColor = color => ({ type: SET_DOOR_COLOR, payload: color });
export const setDoorPosts = number => ({
  type: SET_DOOR_POSTS,
  payload: number
});
export const setDoorBeams = number => ({
  type: SET_DOOR_BEAMS,
  payload: number
});
export const setDoorType = type => ({ type: SET_DOOR_TYPE, payload: type });
