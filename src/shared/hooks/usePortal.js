import React, { useEffect } from "react";

function usePortal() {
  const rootElemRef = React.useRef(document.createElement("div"));

  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const parentElem = document.querySelector(`#portal`);
    // Add the detached element to the parent
    parentElem.appendChild(rootElemRef.current);
    // This function is run on unmount
    const current = rootElemRef.current;
    return function removeElement() {
      current.remove();
    };
  }, []);

  return rootElemRef.current;
}

export default usePortal;
