import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import cardImage from "../../public/assets/logo.png";
import styles from "../Menu/index.module.scss";
import Barbieq from "../../public/assets/card1.png";
import Foods from "../../public/assets/card2.png";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <p>MEXICAN ALL IN FOOD IN HASSELT</p>
        <h2>OUR MENU</h2>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image src={Barbieq} alt={"img"} width={80} height={80} />
          <p>3 hours – Price: 42.50 EUR</p>
        </div>
        <div className={styles.card}>
          <Image src={Foods} alt={"img"} width={80} height={80} />
          <p>1.5 hours – Price: 35 EUR</p>
        </div>
      </div>
      <div>
        <Button variant="secondary" className={styles.btn}>
          <Link href="./ourMenu">OUR MENU</Link>
        </Button>
      </div>
    </div>
  );
};

export default Menu;
