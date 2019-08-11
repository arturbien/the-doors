import styled from "styled-components";
const RectButton = styled.button`
  min-width: 126px;

  border: 2px solid rgba(111, 145, 170, 1);
  background: ${({ primary }) =>
    primary ? "rgba(111, 145, 170, 1)" : "transparent"};

  color: ${({ primary }) =>
    primary ? "rgba(255, 255, 255, 1)" : "rgba(111, 145, 170, 1)"};
  line-height: 31px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`;

export default RectButton;
