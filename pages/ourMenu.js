import React from "react";
import PagesHeader from "../components/PagesHeader";
import MenuPage from "../components/MenuPage";
import img2 from "../public/assets/ourmenubg.jpg";
import Image from "next/image";
import MenuHeader from "../public/assets/menuHeader.png";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const ourMenu = () => {
  return (
    <div>
      <SEO title="Our Menu-sombrerobbq.be " />
      <PagesHeader img={MenuHeader} name={"OUR MENU"} />{" "}
      <div
        className="ourmenudiv"
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
          OUR MENU
        </h1>
      </div>
      <MenuPage />
      <Footer />
    </div>
  );
};

export default ourMenu;
