import Header from "../../components/Other/demos/Header";
import Sandpack from "../../components/Sandpack";

const ContainerDemo = () => {
  return (
    <div>
      <Header link="https://caniuse.com/css-container-queries" />
      <Sandpack
        file={`import React from "react";
import styles from "./container-queries.module.css";
export default function Demo() {
  return (
    <div>
      <p style={{ fontSize: "2rem" }}>Resize!</p>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            alt="Example"
            src={"//unsplash.it/320/240"}
            width="320"
            height="240"
            className={styles.image}
          />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis asperiores suscipit soluta molestias quo architecto ut
            accusantium incidunt quibusdam cumque veritatis provident,
            consectetur nostrum, non excepturi cum ratione! Nam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fuga alias aspernatur
            ea velit. Harum id recusandae deleniti rem provident dolorum
            quisquam unde fuga, ducimus iste quia, in molestias ut voluptatum
            assumenda perferendis commodi eum accusantium, eius sit
            exercitationem. 
          </p>
        </div>
      </div>
    </div>
  );
}
`}
        otherFiles={{
          "/container-queries.module.css": `.container {
  container: post / inline-size;
}
.wrapper {
  display: flex;
  flex-direction: row;
  height: 240px;
  border: 1px solid red;
}
.text {
  margin: 0;
  flex: 3;
  background-color: green;
  padding: 12px;
}
.image {
  margin: initial;
}

@container post (width <= 800px) {
  .wrapper {
    display: block;
    height: auto;
  }
  .image {
    margin: auto;
  }
}`,
        }}
      />
    </div>
  );
};

import React from "react";
import styles from "./container-queries.module.css";
function Demo() {
  return (
    <div>
      <p style={{ fontSize: "2rem" }}>Resize!</p>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            alt="Example"
            src={"//unsplash.it/320/240"}
            width="320"
            height="240"
            className={styles.image}
          />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis asperiores suscipit soluta molestias quo architecto ut
            accusantium incidunt quibusdam cumque veritatis provident,
            consectetur nostrum, non excepturi cum ratione! Nam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fuga alias aspernatur
            ea velit. Harum id recusandae deleniti rem provident dolorum
            quisquam unde fuga, ducimus iste quia, in molestias ut voluptatum
            assumenda perferendis commodi eum accusantium, eius sit
            exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContainerDemo;
