import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Gallerypht from "../../public/assets/gallery.png";
import styles from "../Gallery/index.module.scss";
import Gallery1 from "../../public/assets/hg1.jpg";
import Gallery2 from "../../public/assets/hg2.jpg";
import Gallery3 from "../../public/assets/hg3.jpg";
import Gallery4 from "../../public/assets/hg4.jpg";
import Gallery5 from "../../public/assets/hg5.jpg";
import { getGalleryImages } from "../../utils/contentful";
// import { useEffect } from "react";
import Link from "next/link";

const Gallery = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gallery = [
    { id: 1, img: Gallery1, alt: "image1" },
    { id: 2, img: Gallery2, alt: "image2" },
    { id: 3, img: Gallery3, alt: "image3" },
    { id: 4, img: Gallery4, alt: "image4" },
    { id: 5, img: Gallery5, alt: "image5" },
  ];
  return (
    <div className={styles.container}>
      <div>
        <h1>OUR GALLERY</h1>
      </div>
      {/* <div>
          <Image src={Gallerypht} alt="img" width={1000} height={200} />
        </div> */}
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {gallery.map((createPhoto) => (
            <div key={createPhoto.id} className={styles.imageContainer}>
              <Image
                unoptimized
                src={createPhoto.img}
                alt="img"
                width={220}
                height={200}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.Gbtn}>
        <Button variant="secondary" className={styles.btn}>
          <Link href="/gallery">VIEW ALL</Link>
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
