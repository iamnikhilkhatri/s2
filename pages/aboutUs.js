import React from "react";
import Navbar from "../components/Navbar";
import AboutConcept from "../components/AboutConcept";
import Footer from "../components/Footer";
import Concept from "../components/Concept";
import PagesHeader from "../components/PagesHeader";
import AboutHeader from "../public/assets/aboutUs.png";
import SEO from "../components/SEO";
import Image from "next/image";
import img2 from "../public/assets/aboutusbg.jpg";
import img from "../public/assets/aboutConcept.png";
const aboutUs = () => {
  return (
    <div>
      <SEO title="About Us-sombrerobbq.be" />
      <PagesHeader img={AboutHeader} name={"ABOUT US"} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          alt="img"
          style={{
            width: " -webkit-fill-available",
            /* width: 200px; */
            height: "300px",
            marginTop: " 73px",
          }}
          src={img2}
        ></Image>
        <h1
          style={{
            position: "absolute",
            top: "200px",
            color: "white",
            textAlign: "center",
          }}
        >
          ABOUT US
        </h1>
      </div>
      {/* <AboutConcept /> */}
      <Concept
        heading={"SOMBRERO MEXICAN BARBECUE"}
        content1={
          "Welcome to Sombrero Mexican Barbecue ! We would like to welcome you in our Mexican restaurant just outside the ring road of Hasselt. With us you can enjoy a wide range of delicious dishes."
        }
        IMG={img}
        content2={
          "Our customers always return happy! No wonder, Sombrero Mexican Barbecue is an original evening out with friends, family, or your association. Do you want to know what our customers are saying? Be sure to check out our Facebook page and read the reviews "
        }
        content3={
          "Discover more about our kitchen, with us you can eat all in Mexican at reasonable prices! Even your drink is included!"
        }
        content4={
          "Would you like to come and eat at Sombrero Mexican Barbecue with your association? Then be sure to make a reservation ."
        }
      ></Concept>
      <Footer />
    </div>
  );
};

export default aboutUs;
