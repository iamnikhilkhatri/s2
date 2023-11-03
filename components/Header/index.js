import React, { use } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import Navbar from "../Navbar/index";
import Link from "next/link";
import styled from "../Header/index.module.scss";
// import VideoBackground from "../VideoBackground/index";
// import vedio from "../../public/assets/bbq.mp4";

const Header = () => {
  const route = useRouter();
  return (
    <>
      <section className={styled.wrap}>
        {/* <div className={styled.videoBg}> */}
        {/* <iframe
            // src="https://www.youtube.com/embed/TfQ0-ZzrOg8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=V9H0F0pfLNM&controls=0&disablekb=1"
            src="https://www.youtube.com/embed/TfQ0-ZzrOg8?autoplay=1&mute=1&playsinline=1&loop=1&=1&controls=0&disablekb=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        {/* <iframe
            src="https://www.youtube.com/embed/TfQ0-ZzrOg8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=TfQ0-ZzrOg8&controls=0&disablekb=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
        {/* </div> */}
        <video
          // controls
          autoPlay
          muted
          loop
          src="https://res.cloudinary.com/dnbkqk9dq/video/upload/v1697866988/nabfvbstneis2ybdpuro.mp4"
        ></video>

        {/* <div className={styled.headerContent}>
          <div className={styled.headerContainer}>
            <Navbar />
          </div>
        </div> */}
        <div className={styled.textcontent}>
          <div className={styled.textContainer}>
            <div>
              <h3>WELCOME TO</h3>
              <h1>SOMBRERO MEXICAN BARBEQUE</h1>

              <p>
                Sombrero Mexican barbecue onbeperkt eten en drinken voor slechts
                35€ een feest met vrienden, club og collega’s
              </p>
              {/* <Link href="./ourMenu">
                <li style={{ cursor: "pointer" }}>OUR MENU</li>
              </Link> */}
              <div className={styled.Hbtn}>
                <button
                  onClick={() => Router.push("/ourMenu")}
                  className={styled.btn}
                >
                  VIEW OUR MENU
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
