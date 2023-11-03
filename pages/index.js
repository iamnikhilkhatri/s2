import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/index.js";
import Concept from "../components/Concept/index.js";
import Menu from "../components/Menu/index.js";
import img from "../public/assets/concept.png";
import CustomerReview from "../components/CustomerReview/index";
import Gallery from "../components/Gallery/index";
import Footer from "../components/Footer/index";
import SEO from "../components/SEO";
import Reservation from "../components/Reservation";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

// const Reservation = dynamic(() => import("../components/Reservation"), {
//   ssr: false,
// });

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [firstRender, setFirstRender] = useState(false);
  // useEffect(() => {
  //   setFirstRender(true);
  // }, []);
  // if (firstRender) {
  //   return <></>;
  // }
  return (
    <div className={styles.parent}>
      <SEO title="sombrerobbq.be -Welcome to Sombrero Mexican Barbecue"></SEO>
      <Navbar />
      <Header />
      <Concept
        content1={"At Sombrero Mexican Barbecue you will enjoy Mexican style!"}
        heading={"OUR CONCEPT"}
        content2={
          " In our Mexican restaurant in Hasselt you can enjoy an unlimited meal of a Mexican barbecue à volonté for 3 hours or 1.5 hours. Your drink is included throughout the evening. Wash down your dishes with crisp white wine, tasty red wine, rose wine sunny sangria, tequila orange,beer or soft drinks…"
        }
        IMG={img}
        content3={
          " Sounds like a dream? That’s not it! You choose your own meat and bake it cozy on a barbecue fire at your table and feast on the Mexican buffet. In addition, you can enjoy unlimited vegetables,meat, desserts and drinks."
        }
        content4={
          " In short: Our Sombrero Mexican Barbecue in Hasselt is the perfect evening out with your friends, association, colleagues or family,hombre!"
        }
      />
      <Menu />{" "}
      <div className={styles.wrapper}>
        <Reservation name="MAKE A RESERVATION" />
      </div>
      <CustomerReview />
      <Gallery />
      <Footer />
    </div>
  );
}
