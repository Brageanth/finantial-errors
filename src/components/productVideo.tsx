import React from "react";
import "../styles/components/productVideo.css";

export default function ProductVideo() {
  return (
    <div className="fondoParteVid">
      <div className="instagrams">
        <div className="insta-perfil">
          <img
            src="https://finantial-errors-cdn.s3.amazonaws.com/img/instagram.png"
            alt="Icon-Instagram"
          />
          <a
            href="https://www.instagram.com/YennyCastanedaOficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            @YennyCastanedaOficial
          </a>
        </div>
        <div className="insta-perfil">
          <img
            src="https://finantial-errors-cdn.s3.amazonaws.com/img/instagram.png"
            alt="Icon-Instagram"
          />
          <a
            href="https://www.instagram.com/YennyCastanedaOficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            @RamiroReyesOficial
          </a>
        </div>
      </div>
      <iframe
        style={{ marginBottom: "10vw" }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lRs5mGAjDMc"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
