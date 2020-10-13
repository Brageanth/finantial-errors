import React from "react";
import "../styles/components/sectionInfo.css"

export default function SectionInfo() {
    return (
        <div className="contenedor">
            <div className="texto">
                <p>Tu mente subconsciente es magnetica y atrae o repele todo aquello que crees,consciente o inconscientemente. Es el momento de liberarte de la programacion que no te sirve y descubrir toda tu fuerza y tu poder.</p>
                <p>Epigenetica, neurociencia, kiniseologia, PNL, gimnasia cerebral, psicologa energetica. No lo digo, lo dicen todas ellas: <span className="bold">la mente humana es programable.</span></p>
            </div>
            <div className="texto caja-roja">
                <h2>Creer y crear estan a solo una letra de distancia, y esto no es casualidad.</h2>
                <h2 className="bold">LO QUE CREES, CREAS.</h2>
                <h2>Lo unico que necesitas es actualizar tus creencias.</h2>
            </div>
            <p className="texto bold centrar">Imagina que pudieras re-programar tu mente y cambiar tu vida por completo. Todo aquello que estaba bloqueando en tu interior se libera  y ocurre la magia:</p>
            <ul className="list texto">
                <li>
                    <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                    Descubres que puedes <span className="bold">lograr lo que quieres.</span></li>
                <li>
                    <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                    Eres <span className="bold">capaz de atraer </span>a tu vida solo aquello que deseas para ti.</li>
                <li>
                    <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                     Dejas de lado el miedo y empiezas a tomar <span className="bold">mejores decisiones.</span></li>
                <li>
                    <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                    <span className="bold">Confias plenamente </span>en ti y en tus capacidades.</li>
                <li>
                    <img className="small" src="/img/angle-double-right-solid.svg" alt="icon"/>
                    Rompes con las barreras y permites sacar <span className="bold">todo tu potencial </span>oculto.</li>
            </ul>
            <h2 className="centrar">En definitiva, unes la razon y el corazon. Y solo entonces, todo comienza a fluir.</h2>
        </div>
    );
}