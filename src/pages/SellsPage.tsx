import React from "react";
import BannerProducto from "../components/bannerProducto";
import BannerTop from "../components/bannerTop";
import ProductVideo from "../components/productVideo";
import SecondPartInfo from "../components/secondPartInfo";
import SectionM from "../components/sectionM";
import GirlPart from "../components/girlPart";


export default function SellsPage() {
  return (
    <>
      <BannerTop />
      <SectionM />
      <SecondPartInfo />
      <BannerProducto />
      <ProductVideo />
      <GirlPart />
    </>
  );
}
