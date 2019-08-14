import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

import View2D from "../Design/Preview/View2D";

const Share = ({ match, history, location }) => {
  const searchParams = new URLSearchParams(location.search);
  const viewProps = {};
  console.log({ match, history, location });
  // TODO handle case when someone types wrong param values
  // i.e values exceeding maximum allowed dimension values
  for (let p of searchParams) {
    viewProps[p[0]] = p[1];
  }
  return (
    <ViewWrapper>
      <View2D
        color={viewProps.color}
        width={parseInt(viewProps.width)}
        height={parseInt(viewProps.height)}
        posts={parseInt(viewProps.posts)}
        beams={parseInt(viewProps.beams)}
        type={parseInt(viewProps.type)}
      />
    </ViewWrapper>
  );
};

export default withRouter(Share);

const ViewWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 80px;
  width: 600px;
  max-width: 100%;
  height: 600px;
`;
