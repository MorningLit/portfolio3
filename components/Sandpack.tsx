import React from "react";
import { Sandpack as SandpackTemplate } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";

const Sandpack = ({ file, otherFiles }: { file: string; otherFiles?: {} }) => {
  // make sure to replace your `const Demo` with `export default function Demo()`
  return (
    <SandpackTemplate
      template="react"
      theme={atomDark}
      options={{
        showLineNumbers: true,
        editorHeight: 600,
        activeFile: "/Demo.tsx",
        readOnly: true,
      }}
      files={{
        "/App.js": `import Demo from "./Demo.tsx";

export default function App(){
    return <Demo/>
}`,
        "/Demo.tsx": file,
        ...otherFiles,
      }}
    />
  );
};

export default Sandpack;
