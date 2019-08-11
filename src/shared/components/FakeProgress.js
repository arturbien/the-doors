import React, { useEffect, useState } from "react";

import Progress from "./Progress";

const FakeProgress = ({ ...props }) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const fakeLoad = setTimeout(() => {
      setPercent(Math.min(percent + 2, 100));
    }, 40);

    return () => clearTimeout(fakeLoad);
  }, [percent]);
  return <Progress percent={percent} />;
};

export default FakeProgress;
