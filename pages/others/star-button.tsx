import React from "react";
import styles from "./star-button.module.css";
import Header from "../../components/Other/demos/Header";

const StarButton = () => {
  return (
    <div>
      <Header />
      <button className={styles.button}>
        <span className="spark__container">
          <span className={styles.spark} />
        </span>
        <span className={styles.backdrop} />
        <span className={styles.text}>Shooting star border</span>
      </button>
    </div>
  );
};

export default StarButton;
