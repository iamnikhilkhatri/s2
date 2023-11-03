import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getGalleryImages } from "../../utils/contentful";
import styles from "../GalleryPhotos/index.module.scss";

const GalleryPhotos = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    getGalleryImages().then((d) => {
      console.log(d);
      setImage(d);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        {image.map((d) => {
          return (
            <div
              key={d.sys.id}
              style={{ background: "lightgray" }}
              className={styles.imageWrapper}
            >
              <Image
                // loading="lazy"
                src={"https:" + d.fields.images.fields.file.url}
                //   width={d.fields.images.fields.file.details.image.width}
                //   height={d.fields.images.fields.file.details.image.height}
                width={180}
                height={180}
                alt="img"
                unoptimized
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPhotos;
