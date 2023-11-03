import React from "react";
import PagesHeader from "../components/PagesHeader";
import GalleryPhotos from "../components/GalleryPhotos";
import GalleryHeader from "../public/assets/galleryHeader.png";
import Image from "next/image";
import img2 from "../public/assets/gallary-heading.jpg";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
const PageGallery = () => {
  return (
    <>
      <SEO title="Gallery-sombrerobbq.be " />
      <PagesHeader img={GalleryHeader} name={"GALLERY"} />
      <div
        className="gallarydiv"
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
          GALLERY
        </h1>
      </div>
      <GalleryPhotos />

      <Footer />
    </>
  );
};

export default PageGallery;
{
  /* <div>
  <Image
    src={"https:" + d.fields.images.fields.file.url}
    width={d.fields.images.fields.file.details.image.width}
    height={d.fields.images.fields.file.details.image.height}
  />
</div>; */
}
