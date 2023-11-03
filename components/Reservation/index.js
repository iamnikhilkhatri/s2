import React from "react";
import Button from "react-bootstrap/Button";
import styles from "../Reservation/index.module.scss";
import Head from "next/head";
import Script from "next/script";
function Reservation(props) {
  return (
    // <div>
    //   <tbkr-bm-widget
    //     restaurant-id="20063011"
    //     source="website"
    //     use-modal="0"
    //     lang="en"
    //     theme="light"
    //   ></tbkr-bm-widget>
    //   <script
    //     src="https://reservations.tablebooker.com/tbkr-widget-import.min.js"
    //     async
    //   ></script>
    // </div>
    <section id="element_target" style={{ marginTop: "60px" }}>
      <h3 style={{ textAlign: "center" }}>MAKE YOUR</h3>
      <h1 style={{ textAlign: "center" }}>RESERVATION</h1>
      <br></br>

      <tbkr-bm-widget
        restaurant-id="20063011"
        source="website"
        use-modal="0"
        lang="en"
        theme="dark"
      ></tbkr-bm-widget>
      <Script
        src="https://reservations.tablebooker.com/tbkr-widget-import.min.js"
        async
      ></Script>
    </section>
  );
}
export default Reservation;
