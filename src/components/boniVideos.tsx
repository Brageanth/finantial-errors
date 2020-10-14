import React from "react";
import "../styles/components/boniVideos.css"

export default function BoniVideos() {
    return (

        <>
            <h2 className="title-h2">Aquí tienes historias de familias que ya han utilizado nuestro método:</h2>
            <div className="list-videos">
                <iframe src="https://player.vimeo.com/video/74743801" width="280px" height="160px"></iframe>
                <iframe src="https://player.vimeo.com/video/182083670" width="280px" height="160px"></iframe>
                <iframe src="https://player.vimeo.com/video/97376172" width="280px" height="160px"></iframe>
                <iframe src="https://player.vimeo.com/video/105804018" width="280px" height="160px"></iframe>
            </div>
            <img className="botton-unete-ahora" src="img/Botones (3).png" alt=""/>
        </>
    );
  }