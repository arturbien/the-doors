import React, { useEffect } from "react";

function useRootBlur(id) {
  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const root = document.querySelector(`#root`);
    root.style.transition = "0.8s filter";
    root.style.filter = "blur(3px)";
    return function removeElement() {
      root.style.filter = "";
    };
  }, []);
}

export default useRootBlur;
