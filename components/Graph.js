import clone from "clone";
import { useEffect, useState } from "react";
import { AnimatedTree } from "react-tree-graph";
import "react-tree-graph/dist/style.css";

function Graph({ data, height }) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [activeNode, setActiveNode] = useState(undefined);
  const [filter, setFilter] = useState(undefined);

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

  function handleClick(event, node) {
    setActiveNode(node);
  }

  function filterClick(e) {
    console.log(e.target.value);

    setFilter(e.target.value);
  }

  function getRoot(json) {
    console.log("a");
    if (json.name === activeNode) {
      return json;
    }

    for (let i = 0; i < json.children?.length; i++) {
      const childJson = getRoot(json.children[i]);
      if (childJson) {
        return childJson;
      }
    }

    return false;
  }

  function buildSubTree(root) {
    let newChildren = [];

    for (let i = 0; i < root.children?.length; i++) {
      const child = buildSubTree(root.children[i]);
      if (child) {
        newChildren.push(child);
      }
    }

    if (newChildren.length > 0) {
      root.children = newChildren;
    }

    if (
      newChildren.length > 0 ||
      root.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    ) {
      return root;
    }

    return null;
  }

  function setClassName(node) {
    node.children?.forEach(setClassName);

    if (!filter) {
      return;
    }

    node.className =
      node.name.toLowerCase().indexOf(filter) === -1
        ? "node searchExcluded"
        : "node searchIncluded";
  }

  let root = activeNode ? getRoot(data) : data;

  root = clone(root);
  if (filter) {
    root = buildSubTree(root) || root;
  }

  setClassName(root);

  height = (JSON.stringify(root).match(/name/g) || []).length * 24.5 + 20;
  return (
    <>
      <header id="header">
        <input
          aria-label="Filter nodes"
          id="search"
          type="text"
          placeholder="Rechercher une personne"
          value={filter}
          onChange={filterClick}
          className="appearance-none rounded mx-5 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-welmo-blue focus:outline-none focus:ring-welmo-blue sm:text-sm form-control"
        />
        <button
          className="items-center rounded-md border border-transparent bg-welmo-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-welmo-blue-hover"
          onClick={handleClick}
        >
          Reset
        </button>
      </header>
      <AnimatedTree
        data={root}
        height={height}
        width={windowSize.width}
        nodeRadius={15}
        gProps={{
          className: "node",
          onClick: handleClick,
        }}
        steps={30}
        textProps={{ x: 5, y: 0 }}
      />
    </>
  );
}

export default Graph;
