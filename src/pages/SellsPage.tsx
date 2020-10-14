import React from "react";
import BannerProducto from "../components/bannerProducto";
import BannerTop from "../components/bannerTop";
import ProductVideo from "../components/productVideo";
import SecondPartInfo from "../components/secondPartInfo";
import SectionM from "../components/sectionM";
import GirlPart from "../components/girlPart";
import BoniChallenge from "../components/bonichallenge"
import SectionInfo from "../components/sectionInfo"
import UneteVentas from "../components/uneteVentas"

export default function SellsPage() {
  return (
    <>
      <BannerTop />
      <SectionM />
      <SecondPartInfo />
      <BannerProducto />
      <ProductVideo />
      <GirlPart />
      <BoniChallenge />
      <SectionInfo />
      <UneteVentas />
    </>
  );
}
