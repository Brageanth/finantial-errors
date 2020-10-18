import React from "react";
import "../styles/components/girlPart.css";

export default function GirlPart() {
  return (
    <div className={"girlPart"}>
      <div className="imgNina">
        <img
          src="https://finantial-errors-cdn.s3.amazonaws.com/img/nina.png"
          style={{ width: "100%", position: "absolute", left: 0, bottom: 0 }}
        />
      </div>
      <div className="leftContainer">
        <img
          className="imgTexto"
          src="https://finantial-errors-cdn.s3.amazonaws.com/img/textoNina.png"
        />
        <div className="textImg">
          <h3>
            Enseñándoles a crear una sana relación con el dinero y la abundancia
          </h3>
          <h4>(Método de estudio en casa)</h4>
        </div>
        <div className="iconPc">
          <div>
            <img
              src="https://finantial-errors-cdn.s3.amazonaws.com/img/IconoPc.png"
              style={{
                width: "100%",
              }}
            />
          </div>
          <h5>Inscripciones abiertas hasta el 17 de octubre</h5>
        </div>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=573213135626&text=Estoy%20list@%20para%20Los%20Ni%C3%B1os%20y%20el%20Dinero%20%C2%BFqu%C3%A9%20tengo%20que%20hacer"
        >
          <input
            type="image"
            className="botonUneteAhora"
            src="https://finantial-errors-cdn.s3.amazonaws.com/img/ButtonUneteAhora.png"
          />
        </a>
      </div>
    </div>
  );
}
