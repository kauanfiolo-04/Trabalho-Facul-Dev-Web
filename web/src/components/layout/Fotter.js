import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Fotter.module.css";
const Fotter = () => {
  return (
    <footer className={styles.fotter}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Deveploment production</span> &copy; 2022
      </p>
    </footer>
  );
};

export default Fotter;
