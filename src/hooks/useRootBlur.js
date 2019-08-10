import React, { useEffect } from "react";

function useRootBlur(id) {
  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const root = document.querySelector(`#root`);
    root.style.transition = "0.8s filter";
    root.style.filter = "blur(5px)";
    return function removeElement() {
      // TODO dcecide if transition should be turned off when unmounting effect
      root.style.transition = "0.2s";
      root.style.filter = "";
    };
  }, []);
}

export default useRootBlur;
