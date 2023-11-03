import React from "react";
import styles from "../Footer/index.module.scss";
import Image from "next/image";
import FooterImg from "../../public/assets/logo.png";
import Contact from "../../public/assets/contact.png";
import Email from "../../public/assets/email.png";
import Location from "../../public/assets/location.png";
import FooterUp from "../../public/assets/footerUp.png";
import Link from "next/link";
import FooterLow from "../../public/assets/footerLow.png";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src={FooterImg} alt={"img"} width={100} height={50} />
            <p>At Sombrero Mexican Barbecue you will enjoy Mexican style!</p>
          </div>
          <div className={styles.info}>
            <h6>INFORMATION</h6>
            <br />

            <Link href="./">
              <li
                style={{
                  color: "white",
                  listStyle: "none",
                  marginBottom: "1rem",
                }}
              >
                HOME
              </li>
            </Link>
            <Link href="./aboutUs">
              <li
                style={{
                  color: "white",
                  listStyle: "none",
                  marginBottom: "1rem",
                }}
              >
                ABOUT US
              </li>
            </Link>
            <Link href="./ourMenu">
              <li
                style={{
                  color: "white",
                  listStyle: "none",
                  marginBottom: "1rem",
                }}
              >
                OUR MENU
              </li>
            </Link>
            <Link href="./reservation">
              <li
                style={{
                  color: "white",
                  listStyle: "none",
                  marginBottom: "1rem",
                }}
              >
                RESERVATION
              </li>
            </Link>
            <Link href="./gallery">
              <li
                style={{
                  color: "white",
                  listStyle: "none",
                  marginBottom: "1rem",
                }}
              >
                GALLERY
              </li>
            </Link>
          </div>
          <div className={styles.conatct}>
            <h6>GET IN TOUCH</h6>
            <br />
            <div>
              <Image src={Contact} alt={"img"} width={30} height={30} />
              <p>011 24 11 83</p>
            </div>
            <div>
              <Image src={Email} alt={"img"} width={30} height={30} />
              <p>info@sombrerobbq.be</p>
            </div>
            <div>
              <Image src={Location} alt={"img"} width={30} height={30} />
              <p>Genkersteenweg 52, 3500 Hasselt, Belgium</p>
            </div>
          </div>
          <div className={styles.images}>
            <h6>FOLLOW US ON INSTAGRAM</h6>
            <br />
            <div className={styles.imgFooter}>
              <Image src={FooterUp} alt="img" width={200} height={50} />
              <Image src={FooterLow} alt="img" width={200} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
