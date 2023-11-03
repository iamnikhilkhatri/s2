import React from "react";
import PagesHeader from "../components/PagesHeader";
import ReservationHeader from "../public/assets/reservationHeader.png";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Image from "next/image";
import img2 from "../public/assets/reservationbg.jpg";
// const Reservation = dynamic(() => import("../components/Reservation"), {
//   loading: () => <p>Loading...</p>,
// });
// import { useState } from 'react'
const Reservation = dynamic(() => import("../components/Reservation"), {
  loading: () => <p>Loading...</p>,
});

// import dynamic from "next/dynamic";
// const Reservation = dynamic(() => import("../components/Reservation"), {
//   ssr: false,
// });

export default function reservation() {
  //  ` const [firstRender, setFirstRender] = useState(true);
  //   useEffect(() => {
  //     setFirstRender(false);
  //   }, []);
  //   if (firstRender) {
  //     return <></>;
  //   }`
  return (
    <div>
      <SEO title="Reservation-sombrerobbq.be " />

      <PagesHeader img={ReservationHeader} name={"RESERVATIONS"} />
      <div
        className="reservationdiv"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "244px",
            color: "white",
            textAlign: "center",
          }}
        >
          RESERVATION
        </h1>
      </div>
      <Reservation name="SOMBRERO" />
      <Footer />
    </div>
  );
}
