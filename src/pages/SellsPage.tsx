import React from "react";
import BannerProducto from "../components/bannerProducto";
import ProductVideo from "../components/productVideo";
import GirlPart from "../components/girlPart";
import UneteVentas from "../components/uneteVentas";
import AvisoPeque from "../components/avisoPeque";
import ProgramaCurso from "../components/programaCurso";

export default function SellsPage() {
  return (
    <>
      <BannerProducto />
      <ProductVideo />
      <GirlPart />
      <AvisoPeque />
      <ProgramaCurso />
      <UneteVentas />
    </>
  );
}
