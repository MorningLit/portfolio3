import React from "react";
import styles from "./accent-color.module.css";
const AccentColor = () => {
  const [accentColor, setAccentColor] = React.useState("#000000");
  return (
    <div>
      <div>
        <span>Browser Support: </span>
        <a
          style={{ textDecoration: "underline" }}
          href="https://caniuse.com/mdn-css_properties_accent-color"
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </div>
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

export default AccentColor;
