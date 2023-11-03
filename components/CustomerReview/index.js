import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../CustomerReview/index.module.scss";
import Image from "next/image";
import People from "../../public/assets/people.png";
import Star from "../../public/assets/star.png";

const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 2600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const arr = [
    {
      id: 1,
      review: "Nice place to visit but too warm inside during summer",
      name: "Favour Agege",
    },
    {
      id: 2,
      review:
        "Wonderful concept.. hygienic.. value for money.. very friendly staff.. thanks for nice experience…",
      name: "Nivedan Prem",
    },
    {
      id: 3,
      review: "Really good place, staff amazing and the food is very tasty.",
      name: "Marius Cojocaru",
    },
    {
      id: 4,
      review: "Really good place, staff amazing and the food is very tasty.",
      name: "Marius Cojocaru",
    },
    {
      id: 5,
      review: "Really good place, staff amazing and the food is very tasty.",
      name: "Marius Cojocaru",
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>CUSTOMER REVIEWS</h2>
      </div>

      <div className={styles.slideContainer}>
        <Slider {...settings}>
          {arr.map((createCard) => (
            <div key={createCard.id} className={styles.slide}>
              <div className={styles.slideUp}>
                <Image src={Star} alt="img" />
                <p>{createCard.review}</p>
              </div>

              <div className={styles.slideDown}>
                <Image src={People} alt="img" height={50} />
                <p>{createCard.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReview;
