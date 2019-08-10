import React from "react";

import LogoImage from "../assets/images/Logo@2x.png";
//TODO add higher resolution image for retinas n stuff
//TODO add alt

export default props => (
  <img {...props} src={LogoImage} alt={"AppLover logo"} />
);
