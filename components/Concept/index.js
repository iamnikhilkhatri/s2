import React from "react";
import Button from "react-bootstrap/Button";
import styled from "../Concept/index.module.scss";
import Image from "next/image";
import concept from "../../public/assets/concept.png";

const Concept = ({ heading, content1, content2, content3, content4, IMG }) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.mainContainer}>
        <div className={styled.contentLeft}>
          <Image src={IMG} alt={"img"} width={500} height={500} />
        </div>
        <div className={styled.contentRight}>
          <div className={styled.heading}>
            <p>MEXICAN RESTAURANT IN HASSELT </p>
            <h3>{heading}</h3>
          </div>
          <p>
            {content1}
            <br />
            <br />
            {content2}
            <br /> <br />
            {content3} <br /> <br />
            {content4}
          </p>
          <div className={styled.btnContainer}>
            <Button variant="secondary" className={styled.btn}>
              <a href="#element_target">RESERVE YOUR TABLE</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
