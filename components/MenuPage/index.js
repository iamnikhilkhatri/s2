import React from "react";
import { useState, useEffect } from "react";
import { getMenuImages } from "../../utils/contentful";
import { getFoodImages } from "../../utils/contentful";
import styles from "../MenuPage/index.module.scss";
import Image from "next/image";
import Cocktails from "../../public/assets/cocktails.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MenuPage = () => {
  const [image, setImage] = useState([]);
  const [state, setState] = useState(false);
  const optionData = [
    ["Sangria", "Tequila", "sunrise"],
    ["Mexican soup", "Broccoli soup", "Tomato soup"],
  ];
  useEffect(() => {
    getMenuImages().then((d) => {
      console.log(d);
      setImage(d);
    });
  }, []);

  // const showInnerMenu0 = () => {
  //   window.document
  //     .getElementById("innermenucontrol0")
  //     .classList.toggle("innermenuActive");
  // };
  // const showInnerMenu1 = () => {
  //   window.document
  //     .getElementById("innermenucontrol1")
  //     .classList.toggle("innermenuActive");
  // };

  const [icon, setIcon] = useState([]);
  useEffect(() => {
    getFoodImages().then((a) => {
      console.log(a);
      setIcon(a);
    });
  }, []);

  const [arr, setArr] = useState([]);
  const handleItemClick = (item) => {
    setArr((array) => [...arr, item]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.priceContainer}>
        KIDS FROM 0 to 5 - <span style={{ color: "#FCF667" }}> &nbsp;FREE</span>{" "}
        &nbsp; |&nbsp; KIDS FROM 5 to 10 - PRICE&nbsp;{" "}
        <span style={{ color: "#FCF667" }}>15 EURO</span> &nbsp;|&nbsp; KIDS
        FROM 11 to 14 - PRICE{" "}
        <span style={{ color: "#FCF667" }}>&nbsp;20 EURO</span>
      </div>
      <div class={styles.menuContainer}>
        <div className={styles.column1}>
          <div className={styles.menuHeading}>
            <p>ALL U CAN EAT AND DRINK</p>
            <h4>3 HOURS | PRICE : 42.50 EURO</h4>
          </div>
          <div className={styles.cardContainer}>
            {image.map((d, index) => {
              return (
                <>
                  <div key={d.sys.id} className={styles.wrapper}>
                    <div className={styles.card}>
                      <div>
                        <Image
                          src={"https:" + d.fields.foodImage.fields.file.url}
                          alt="img"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className={styles.info}>
                        <p>{d.fields.foodImage.fields.title}</p>

                        {/* <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span> */}
                      </div>{" "}
                    </div>{" "}
                    <button
                      onClick={() =>
                        window.document
                          .getElementById("i1nnermenucontrol" + index)
                          .classList.toggle("innermenuActive")
                      }
                    >
                      View All
                    </button>
                    {/* <select
                    // style={{
                    //   outline: "none",
                    //   border: "none",
                    //   position: "relative",
                    //   top: "-57px",
                    //   background: "transparent",
                    // }}
                    className={styles.customSelect}
                  >
                    {" "}
                    <option
                      style={{
                        textAlign: "right",
                        padding: "12px",
                        borderBottom: "2px solid black",
                      }}
                    >
                      VIEW ALL
                    </option>
                    {d.fields.foodoptions?.map((e) => {
                      return (
                        <option
                          key={e}
                          style={{
                            padding: "12px",
                            borderBottom: "2px solid black",
                          }}
                          className="option"
                          disabled="true"
                        >
                          {e}
                        </option>
                      );
                    })}
                  </select> */}
                    {/* <details>
                    <summary>Categories</summary>
                  </details> */}
                    {/* {d.fields.foodoptions?.map((e, index) => {
                    return (
                      // <option
                      //   key={e}
                      //   style={{
                      //     padding: "12px",
                      //     borderBottom: "2px solid black",
                      //   }}
                      //   className="option"
                      //   disabled="true"
                      // >
                      //   {e}
                      // </option>
                      <li onClick={() => handleItemClick(e)}>
                        <button>View All</button>
                      </li>
                    );
                  })} */}
                    {/* <selectmenu>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </selectmenu> */}
                  </div>
                  <div id={`i1nnermenucontrol${index}`} className="innermenu">
                    {d.fields.foodoptions?.map((e, index) => {
                      return <p key={index}>{e}</p>;
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.menuHeading2}>
            <p>ALL U CAN EAT AND DRINK</p>
            <h4>1.5 HOURS | PRICE : 35 EURO</h4>
          </div>
          <div className={styles.cardContainer2}>
            {icon.map((a, index) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      // flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    className={styles.wrapper2}
                    key={a.sys.id}
                  >
                    <div className={styles.card2}>
                      <div>
                        <Image
                          src={"https:" + a.fields.breadImage.fields.file.url}
                          alt="img"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className={styles.info2}>
                        <p>{a.fields.breadImage.fields.title}</p>
                        {/* <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span> */}
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        window.document
                          .getElementById("innermenucontrol" + index)
                          .classList.toggle("innermenuActive")
                      }
                    >
                      View All
                    </button>
                    {/* <select
                    className={styles.customSelect}
                    // style={{
                    //   outline: "none",
                    //   border: "none",
                    //   position: "relative",
                    //   top: "-57px",
                    //   background: "transparent",
                    // }}
                  >
                    <option
                      style={{
                        textAlign: "right",
                        padding: "12px",
                        borderBottom: "2px solid black",
                      }}
                    >
                      VIEW ALL
                    </option>
                    {a.fields.foodoptions?.map((e) => {
                      return (
                        <option
                          key={e}
                          style={{
                            padding: "12px",
                            textAlign: "left",
                            borderBottom: "2px solid black",
                          }}
                          className="option"
                          disabled="true"
                        >
                          {e}
                        </option>
                      );
                    })}
                  </select> */}
                  </div>
                  <div id={`innermenucontrol${index}`} className="innermenu">
                    {a.fields.foodoptions?.map((e, index) => {
                      return <p key={index}>{e}</p>;
                    })}
                  </div>
                </>
              );
            })}
            {/* <div className={styles.card2}>
              <div>
                <Image src={Cocktails} alt="img" width={80} height={80} />
              </div>
              <div className={styles.info2}>
                <p>COCKTAILS</p>
                <span>
                  <i class="fa-solid fa-angle-down"></i>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
