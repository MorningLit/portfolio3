import Header from "../../components/Other/demos/Header";
import Sandpack from "../../components/Sandpack";
const AccentColor = () => {
  return (
    <div>
      <Header link="https://caniuse.com/mdn-css_properties_accent-color" />
      <Sandpack
        file={`import React from "react";
import styles from "./accent-color.module.css";
export default function Demo() {
  const [accentColor, setAccentColor] = React.useState("#000000");
  return (
    <div>
      <div>
        <label className={styles.label}>
          Checkbox
          <input
            type="checkbox"
            style={{ accentColor, width: "1.25rem", height: "1.25rem" }}
            defaultChecked
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Radio
          <input
            type="radio"
            defaultChecked
            style={{ accentColor, width: "1.25rem", height: "1.25rem" }}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Range
          <input
            type="range"
            style={{ accentColor, height: "1.25rem" }}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Progress
          <progress
            style={{ accentColor, border: "revert", height: "16px" }}
            value={"50"}
            max={"100"}
            className={styles.input}
          >
            50%
          </progress>
        </label>
      </div>
      <div style={{ fontSize: "2rem", marginTop: "16px" }}>
        <span style={{ marginRight: "16px" }}>Pick a color!</span>
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
        />
      </div>
    </div>
  );
};
`}
        otherFiles={{
          "/accent-color.module.css": `.label {
  display: block;
  font-size: 2rem;
}
.input {
  margin-left: 16px;
}
`,
        }}
      />
    </div>
  );
};

import React from "react";
import styles from "./accent-color.module.css";
function Demo() {
  const [accentColor, setAccentColor] = React.useState("#000000");
  return (
    <div>
      <div>
        <label className={styles.label}>
          Checkbox
          <input
            type="checkbox"
            style={{ accentColor, width: "1.25rem", height: "1.25rem" }}
            defaultChecked
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Radio
          <input
            type="radio"
            defaultChecked
            style={{ accentColor, width: "1.25rem", height: "1.25rem" }}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Range
          <input
            type="range"
            style={{ accentColor, height: "1.25rem" }}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Progress
          {/*TODO: have a progress bar demo and animate progress bar */}
          <progress
            style={{ accentColor, border: "revert", height: "16px" }}
            value={"50"}
            max={"100"}
            className={styles.input}
          >
            50%
          </progress>
        </label>
      </div>
      <div style={{ fontSize: "2rem", marginTop: "16px" }}>
        <span style={{ marginRight: "16px" }}>Pick a color!</span>
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
        />
      </div>
    </div>
  );
}
export default AccentColor;
