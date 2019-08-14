export const DOOR_TYPES = {
  SINGLE: { value: 1, name: "singleDoor" },
  DOUBLE: { value: 2, name: "doubleDoor" }
};
export const COLORS = {
  BLACK: { value: "#000000", name: "black" },
  WHITE: { value: "#F4F2F2", name: "white" },
  GRAY: { value: "#797474", name: "gray" },
  NEON: { value: "#1DE278", name: "neon" },
  SKY: { value: "#2699FB", name: "sky" }
};

export const DIMENSIONS = {
  WIDTH: {
    default: 120,
    min: 1,
    max: 160
  },
  HEIGHT: {
    default: 240,
    min: 1,
    max: 300
  },
  THICKNESS: {
    default: 4,
    min: 2,
    max: 15
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

export const LANGUAGES = {
  EN: {
    value: "en",
    label: "English"
  },
  PL: {
    value: "pl",
    label: "Polish"
  }
};
