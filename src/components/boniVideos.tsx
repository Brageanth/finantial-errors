import React from "react";
import "../styles/components/boniVideos.css";

export default function BoniVideos() {
  return (
    <>
      <h2 className="title-h2">
        Aquí tienes historias de algunas familias que ya han utilizado nuestro
        método:
      </h2>
      <div className="list-videos">
        <div>
          <div className="iframe2">
            <iframe
              src="https://player.vimeo.com/video/468320892"
              width="560"
              height="315"
            ></iframe>
          </div>
        </div>
        <div>
          <div className="iframe2">
            <iframe
              src="https://player.vimeo.com/video/468323101"
              width="560"
              height="315"
            ></iframe>
          </div>
        </div>
        <div>
          <div className="iframe2">
            <iframe
              src="https://player.vimeo.com/video/468319302"
              width="560"
              height="315"
            ></iframe>
          </div>
        </div>
        <div>
          <div className="iframe2">
            <iframe
              src="https://player.vimeo.com/video/468317620"
              width="560"
              height="315"
            ></iframe>
          </div>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=573213135626&text=Estoy%20list@%20para%20Los%20Ni%C3%B1os%20y%20el%20Dinero%20%C2%BFqu%C3%A9%20tengo%20que%20hacer">
        <img className="botton-unete-ahora" src="/img/Botones (2).png" alt="" />
      </a>
    </>
  );
}
