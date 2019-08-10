export const DOOR_TYPES = {
  SINGLE: { value: 1, name: "Single door" },
  DOUBLE: { value: 2, name: "Double door" }
};
export const COLORS = {
  BLACK: { value: "#000000", name: "Black" },
  WHITE: { value: "#F4F2F2", name: "White" },
  GRAY: { value: "#797474", name: "Gray" },
  NEON: { value: "#1DE278", name: "Neon" },
  SKY: { value: "#2699FB", name: "Sky" }
};

export const DIMENSIONS = {
  WIDTH: {
    default: 120,
    min: 0,
    max: 160
  },
  HEIGHT: {
    default: 240,
    min: 0,
    max: 300
  }
};

export const STRUCTURE = {
  BEAMS: {
    default: 2,
    min: 0,
    max: 4
  },
  POSTS: {
    default: 2,
    min: 0,
    max: 4
  }
};
