import React from "react";
import "../styles/components/girlPart.css";

export default function GirlPart() {
  return <div>
      <div>
          <div>
              <img className="imgNina" src="https://finantial-errors-cdn.s3.amazonaws.com/img/nina.png" />
          </div>
          <div>
              <img className="imgTexto" src="https://finantial-errors-cdn.s3.amazonaws.com/img/textoNina.png" />
          </div>
          <div className="textImg">
              <h3>Enseñándoles a crear una sana relación con el dinero y la abundancia</h3>
              <h4>(Método de estudio en casa)</h4>
          </div>
          <div className="iconPc">
              <h5>Inscripciones abiertas hasta el 17 de octubre</h5>
              <img src="https://finantial-errors-cdn.s3.amazonaws.com/img/IconoPc.png" />
          </div>
          <input type="image" className="botonUneteAhora" src="https://finantial-errors-cdn.s3.amazonaws.com/img/ButtonUneteAhora.png" />
      </div>
  </div>;
}