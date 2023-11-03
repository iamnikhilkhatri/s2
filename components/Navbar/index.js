import React from "react";
import styles from "../Navbar/index.module.scss";
import Logo from "../../public/assets/logo.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 500) {
      setScrolled(true);
    } else setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const a = styles.navbar;
  const b = styles.scrollDown;
  return (
    <div>
      <div className={scrolled ? b : a}>
        <div className={styles.logo}>
          <Link href="./">
            <Image src={Logo} alt="img" width={100} height={50} />
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="./">
            <li>HOME</li>
          </Link>
          <Link href="./aboutUs">
            <li>ABOUT US</li>
          </Link>
          <Link href="./ourMenu">
            <li>OUR MENU</li>
          </Link>
          <Link href="./reservation">
            <li>RESERVATION</li>
          </Link>
          <Link href="./gallery">
            <li>GALLERY</li>
          </Link>
        </div>
        <div className={styles.btn}>
          <Link href="./contactUs">
            <button className={styles.navButton}>CONTACT US</button>
          </Link>
        </div>

        <div className={styles.bar}>
          <i
            onClick={() => setShow(!show)}
            className="fa-solid fa-bars fa-2xl"
          ></i>
        </div>
        {show && (
          <div className={styles.Mobilemenu}>
            <div className={styles.logo}>
              <Image src={Logo} alt={"img"} width={80} height={50} />
              <i
                className="fa-solid fa-xmark"
                onClick={() => setShow(!show)}
              ></i>
            </div>

            <div className={styles.menu}>
              <Link href="./">
                <li>HOME</li>
              </Link>

              <Link href="./aboutUs">
                <li>ABOUT US</li>
              </Link>
              <Link href="./ourMenu">
                <li>OUR MENU</li>
              </Link>
              <Link href="./reservation">
                <li>RESERVATION</li>
              </Link>
              <Link href="./gallery">
                <li>GALLERY</li>
              </Link>
            </div>

            <div className={styles.Mbtn}>
              <Link
                href="./contactUs
              "
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
