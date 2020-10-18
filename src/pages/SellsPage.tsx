import React, { useEffect, useState } from "react";
import BannerProducto from "../components/bannerProducto";
import ProductVideo from "../components/productVideo";
import GirlPart from "../components/girlPart";
import UneteVentas from "../components/uneteVentas";
import BoniText from "../components/bonitext";
import AvisoPeque from "../components/avisoPeque";
import ProgramaCurso from "../components/programaCurso";
import BonusSpecial from "../components/bonusSpecial";
import BoniVideos from "../components/boniVideos";
import Footer from "../components/footer";
import moment from "moment";
import CountdownPage from "./CountdownPage";
import Comments from "../components/comments";

export default function SellsPage() {
  const path = window.location.pathname.split("/")[1];
  const [ready, setReady] = useState(false);

  if (moment().isSameOrBefore(moment("2020-10-14 19:00:00")) && ready) {
    return (
      <CountdownPage
        date={moment("2020-10-14 19:00:00")}
        ready={() => setReady(true)}
      />
    );
  }

  return (
    <>
      {!!path && (
        <>
          <BannerProducto />
          <ProductVideo />
        </>
      )}
      <GirlPart />
      <AvisoPeque />
      <ProgramaCurso />
      <UneteVentas />
      <BonusSpecial />
      <BoniText />
      <BoniVideos />
      <Comments videoId={"5"} />
      <Footer />
    </>
  );
}
