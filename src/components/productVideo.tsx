import React from "react";
import "../styles/components/productVideo.css";

export default function ProductVideo() {
  return <div className="fondoParteVid">
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
      <div>
        <iframe src="http://player.vimeo.com/video/29186408" width="500" 
                height="281" allowFullScreen>
        </iframe>
      </div>
  </div>;
}