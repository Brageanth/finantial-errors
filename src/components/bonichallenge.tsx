import React from "react";
import "../styles/components/bonichallenge.css"

export default function BoniChallenge() {
    return (
     <div className="box-challenge">
          <div className="contenedor">
               <h1>¿Cuales son tus creencias?</h1>
               <ul className="list">
                    <li>
                         <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                         Fallare de nuevo si lo intento.
                    </li>
                    <li>
                         <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                         Es muy tarde para cambiar.
                    </li>
                    <li>
                         <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                         Es que no soy muy inteligente.
                    </li>
                    <li>
                         <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                         solamente la gente con suerte tiene exito.
                    </li>
                    <li>
                         <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                         No confio en nadie porque la gente es traicionera.
                    </li><li>
                         <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                         Las relaciones amorosas siempre terminan mal.
                    </li>
               </ul>
               <p><span>Piensalo: </span>¿Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam nulla magni rem impedit dignissimos dolore sunt quasi! Necessitatibus nihil obcaecati modi deserunt sequi reprehenderit fuga nemo repudiandae vitae voluptates?</p>
          </div>
     </div>
    );
  }
  