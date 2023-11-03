import React from "react";
import Image from "next/image";
import styles from "../PagesHeader/index.module.scss";
import Navbar from "../Navbar";

const PagesHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.navContent}>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default PagesHeader;
