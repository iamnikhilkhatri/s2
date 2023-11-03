import Head from "next/head";
import React from "react";

const SEO = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="icon" href="favicon.ico" />

      {props.children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbecue",
            name: "Sombrerobbq.be-MEXICAN RESTAURANT IN HASSELT ",
            alternateName: "SOMBRERO",
            url: "https://sombrerobbq.be/",
            logo: "https://mcme.in/_next/static/media/mc_me.f2b1b01b.png",
            sameAs: [
              "https://www.facebook.com/profile.php?id=100086274532820",
              "https://twitter.com/mcme_techserve",
              "https://www.instagram.com/mcmeofficial/",
              "https://www.linkedin.com/in/mcme-techserve",
              "https://mcme.in/",
            ],
          }),
        }}
      />

      {/* Google Tag Manager */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59HMWWJ');`,
        }}
      ></script> */}
      {/* End Google Tag Manager */}
    </Head>
  );
};

export default SEO;
