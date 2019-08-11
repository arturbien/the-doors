import { useState, useRef, useLayoutEffect } from "react";

function useDimensions() {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({});

  useLayoutEffect(() => {
    console.log("swag");
    setDimensions(ref.current.getBoundingClientRect());
  }, [ref]);

  return [ref, dimensions];
}

export default useDimensions;
