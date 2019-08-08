import React from "react";
import styled from "styled-components";

import LogoImage from "../assets/images/Logo.png";
//TODO add higher resolution image for retinas n stuff
//TODO add alt

export default props => (
  <img {...props} src={LogoImage} alt={"AppLover logo"} />
);
