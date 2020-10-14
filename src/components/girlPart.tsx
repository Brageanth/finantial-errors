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
        <input
          type="image"
          className="botonUneteAhora"
          src="https://finantial-errors-cdn.s3.amazonaws.com/img/ButtonUneteAhora.png"
        />
      </div>
    </div>
  );
}
