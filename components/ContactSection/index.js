import React from "react";
import styles from "../ContactSection/index.module.scss";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Contact from "../../public/assets/contactIcon.png";
import Email from "../../public/assets/emailIcon.png";
import Location from "../../public/assets/locationIcon.png";

const ContactSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p id={styles.heading}>GET IN TOUCH</p>
          <div className={styles.leftHeading}>
            <h2>WE WILL BE IN TOUCH SHORTLY </h2>
          </div>
          <div className={styles.contactOptions}>
            <div>
              <Image src={Contact} alt="img" width={50} height={50} />
              <span>011 24 11 83</span>
            </div>
            <div>
              <Image src={Email} alt="img" width={50} height={50} />
              <span>info@sombrerobbq.be</span>
            </div>
            <div>
              <Image src={Location} alt="img" width={50} height={50} />
              <span>Genkersteenweg 52, 3500 Hasselt, Belgium</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p id={styles.heading}>GET IN TOUCH</p>
          <h2>HAVE OTHER QUESTIONS?</h2>
          <form action="" className={styles.form}>
            <div>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div>
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <div>
              <textarea
                name="textarea"
                id=""
                cols="60"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
          </form>
          <div className={styles.btnContainer}>
            <Button variant="secondary" className={styles.btn}>
              {" "}
              SEND MESSAGE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
