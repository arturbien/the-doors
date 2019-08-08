import React from "react";
import { createPortal } from "react-dom";

import useRootBlur from "../hooks/useRootBlur";
import usePortal from "../hooks/usePortal";

const Modal = ({ children }) => {
  const target = usePortal();

  useRootBlur();

  return createPortal(children, target);
};

export default Modal;
