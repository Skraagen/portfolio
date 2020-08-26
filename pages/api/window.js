import { useState, useEffect } from "react";

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowWidth, setWindowWidth] = useState(
    isWindowClient ? window.innerWidth : undefined
  );
  const [windowHeight, setWindowSize] = useState(
    isWindowClient ? window.innerHeight : undefined
  );

  //👇
  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setWidth() {
      setWindowWidth(window.innerWidth);
    }
    function setHeight() {
      setWindowHeight(window.innerHeight);
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setWidth);

      //un-register the listener
      return () => window.removeEventListener("resize", setWidth);
    }
  }, [isWindowClient, setWindowWidth]);
  //☝️

  return {windowWidth, windowHeight};
}

export default useWindowSize;
