import { Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "./container-queries.module.css";

const ContainerDemo = () => {
  return (
    <div>
      <div>
        <span>Browser Support: </span>
        <a
          style={{ textDecoration: "underline" }}
          href="https://caniuse.com/css-container-queries"
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </div>
      <p style={{ fontSize: "2rem" }}>Resize your browser!</p>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image
            alt="Example"
            src={"/examples/4by3.png"}
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
            exercitationem. Sit, error! Ratione obcaecati debitis, accusamus
            amet, nostrum similique perspiciatis cumque omnis laboriosam eveniet
            pariatur magnam quas veritatis eius repellendus quae dolor voluptate
            quia aspernatur, aperiam fugiat a explicabo. Velit nam tempore
            perspiciatis, incidunt odio amet iste cumque, sint facilis quidem
            rerum quis eos ipsam quas excepturi, itaque aliquam qui accusantium
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContainerDemo;
