import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import useRootBlur from "../../hooks/useRootBlur";
import usePortal from "../../hooks/usePortal";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(173, 178, 181, 0.83);
`;

const Modal = ({ children }) => {
  const target = usePortal();
  useRootBlur();
  return createPortal(<Backdrop>{children}</Backdrop>, target);
};

export default Modal;
