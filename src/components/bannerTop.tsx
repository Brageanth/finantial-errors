import React from "react";
import "../styles/components/bannerTop.css";

export default function BannerTop() {
  return <div>
    <div className = "imgTopProd"> 
      <img className = "imgTopBanner"
      src = {`https://finantial-errors-cdn.s3.amazonaws.com/img/Workbook-Clase1.png`} />
      <div>
        <p>CLASE ONLINE</p>
        <h1>04 errores financieros</h1>
        <h2>Cambia tu mente. Transforma tu vida</h2>
        <h3>Re-programa las creecias limiantes de tu subconsiente para alcanzar 
        las metas que te propones y cumplir tus sueños
        </h3>
      </div>
    </div>
  </div>;
}
