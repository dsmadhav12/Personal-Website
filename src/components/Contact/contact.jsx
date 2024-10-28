import React from "react";

import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Checkout my other socials!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <a href="mailto:dsmadhav@hotmail.com">
            <img src={getImageUrl("email.png")} alt="Email image" />
            </a>
          <a href="mailto:dsmadhav@hotmail.com">dsmadhav@hotmail.com</a>
        </li>
        <li className={styles.link}>
            <a href="https://www.linkedin.com/in/madhav-donepudi-a0821b328/">
            <img src={getImageUrl("linkedin.png")} alt="LinkedIn image"/>
            </a>
          <a href="https://www.linkedin.com/in/madhav-donepudi-a0821b328/">linkedin.com/madhavd12</a>
        </li>
        <li className={styles.link}>
            <a href="https://github.com/dsmadhav12">
            <img src={getImageUrl("github.png")} alt="Github image" />
            </a>
          <a href="https://github.com/dsmadhav12">github.com/dsmadhav12</a>
        </li>
      </ul>
    </footer>
  );
};