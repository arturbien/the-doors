import styled from "styled-components";

const CloseButton = styled.button`
  display: inline-block;
  border: none;

  height: 14px;
  width: 14px;

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 7px;
    height: 15px;
    width: 2px;
    background: ${({ color }) => (color ? color : "rgba(255, 255, 255, 1)")};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default CloseButton;
