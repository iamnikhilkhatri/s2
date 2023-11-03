import React from "react";
import PagesHeader from "../components/PagesHeader";

import contactHeader from "../public/assets/contactHeader.png";
import ContactSection from "/components/ContactSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
const ourMenu = () => {
  return (
    <div>
      <SEO title="Contact Us-sombrerobbq.be " />
      <PagesHeader img={contactHeader} name={"CONTACT US"} />
      <div
        className="contactUsdiv"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "200px",
            color: "white",
            textAlign: "center",
          }}
        >
          Contact Us
        </h1>
      </div>
      <ContactSection />

      <Footer />
    </div>
  );
};

export default ourMenu;
