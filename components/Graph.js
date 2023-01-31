import { useEffect, useState } from "react";
import { Tree } from "react-tree-graph";
import "react-tree-graph/dist/style.css";

function Graph({ data, height }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <Tree
      data={data}
      height={height}
      width={windowSize.width}
      nodeRadius={15}
      textProps={{ x: -40, y: -15 }}
    />
  );
}

export { Graph };
