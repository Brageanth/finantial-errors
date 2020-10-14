import React from "react";
import BannerProducto from "../components/bannerProducto";
import ProductVideo from "../components/productVideo";
import GirlPart from "../components/girlPart";
import UneteVentas from "../components/uneteVentas";
import BoniText from "../components/bonitext";
import AvisoPeque from "../components/avisoPeque";
import { BonusSpecial } from "../components/bonusSpecial";
import BoniVideos from "../components/boniVideos"

export default function SellsPage() {
  return (
    <>
      <BannerProducto />
      <ProductVideo />
      <GirlPart />
      <AvisoPeque />
      <UneteVentas />
      <BonusSpecial />
      <BoniText />
      <BoniVideos />
    </>
  );
}
