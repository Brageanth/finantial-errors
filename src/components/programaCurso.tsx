import React from "react";
import "../styles/components/programaCurso.css";

export default function ProgramaCurso() {
  return <div>
      <div className="titNormi"><h1 className="titNormi"><span>Programa</span> del Curso</h1></div>
      <div className="contenedorColum">
          <div className="container222">
          <div className="paqImg">
              <div><img src="https://finantial-errors-cdn.s3.amazonaws.com/img/IconPlay.png" /></div>
              <div><h2><span>Acceso</span> a O5 módulos y +40 lecciones.</h2></div>
            </div>
          <div className="paqImg"> 
            <div><img src="https://finantial-errors-cdn.s3.amazonaws.com/img/IconCohete.png" /></div>
            <div><h2>Conexión con la abundancia, mentalidad y creencias, principios, valores
                  y virtudes que crean riqueza duradera.</h2></div>
          </div>
          <div className="paqImg">
              <div><img src="https://finantial-errors-cdn.s3.amazonaws.com/img/IconCerebro.png" /></div>
              <div><h2>Método para <span>reprogramarnos.</span> Herramientas para la ejecución</h2></div>
          </div>
          </div>
          <div className="container222">
          <div className="paqImg">
              <div><img src="https://finantial-errors-cdn.s3.amazonaws.com/img/IconDinero.png" /></div>
              <div><h2>Cómo y en qué <span>producir dinero</span> en forma divertida según momento
                de vida.</h2></div> 
          </div>
          <div className="paqImg">
              <div><img src="https://finantial-errors-cdn.s3.amazonaws.com/img/IconCalculo.png" /></div>
              <div><h2>Preparando mi futuro financiero. Cómo <span>administrar</span> mi dinero.</h2></div>
          </div>
          <div className="paqImg">
              <div><img src="https://finantial-errors-cdn.s3.amazonaws.com/img/IconGraph.png" /></div>
              <div><h2>Preparando mi futuro financiero. Cómo <span>invertir</span> mi dinero.</h2></div>
          </div>
          </div>
      </div>
  </div>;
}