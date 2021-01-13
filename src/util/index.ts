import { useEffect, useState } from "react";

/**
 * Hook to get the window's current width and height
 */
export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handler = () => setDimensions(getWindowDimensions());

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return dimensions;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}
