import React from "react";
import Button from "react-bootstrap/Button";
import styled from "../AboutConcept/index.module.scss";
import Image from "next/image";
import AboutConceptImg from "../../public/assets/aboutConcept.png";

const AboutConcept = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.mainContainer}>
        <div className={styled.contentLeft}>
          <Image src={AboutConceptImg} alt={"img"} width={500} height={500} />
        </div>
        <div className={styled.contentRight}>
          <div className={styled.heading}>
            <p>MEXICAN RESTAURANT IN HASSELT </p>
            <h3>SOMBRERO MEXICAN BARBECUE</h3>
          </div>
          <p>
            Welcome to Sombrero Mexican Barbecue ! We would like to welcome you
            in our Mexican restaurant just outside the ring road of Hasselt.
            With us you can enjoy a wide range of delicious dishes. <br />{" "}
            <br />
            Our customers always return happy! No wonder, Sombrero Mexican
            Barbecue is an original evening out with friends, family, or your
            association. Do you want to know what our customers are saying? Be
            sure to check out our Facebook page and read the reviews . <br />{" "}
            <br />
            Discover more about our kitchen, with us you can eat all in Mexican
            at reasonable prices! Even your drink is included! <br />
            <br />
            Would you like to come and eat at Sombrero Mexican Barbecue with
            your association? Then be sure to make a reservation .
            <br />
            <br />
          </p>
          <div>
            <Button variant="secondary" className={styled.btn}>
              {" "}
              RESERVE YOUR TABLE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConcept;
