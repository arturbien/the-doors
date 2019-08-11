import styled from "styled-components";

const Popup = styled.div`
  position: relative;
  padding: 20px 40px 20px 20px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.18);

  background: rgba(255, 255, 255, 1);
  &:before {
    content:"";
    position: absolute;
    top: 0;
    right: 30px
    display: inline-block;
    width: 20px;
    height: 20px;
    transform: translateY(-50%) rotateZ(45deg);
    background: rgba(255, 255, 255, 1);
  }
`;

export default Popup;
