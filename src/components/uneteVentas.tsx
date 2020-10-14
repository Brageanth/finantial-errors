import React from "react";
import "../styles/components/uneteVentas.css"

export default function UneteVentas() {
    return (

        <>
            <div className="unete-head">
                    <h2>Únete a <span>Los Niños y el Dinero</span></h2>
                    <div className="p-padding">
                        <p>El inicio de un MOVIMIENTO de creación de prosperidad.</p>
                        <p>Enseñando sobre el dinero antes que a leer y a escribir...</p>
                    </div>
            </div>
            <div className="unete-container">
                <div className="unete-precio">
                    <h2 >Precio Regular</h2>
                    <h2 className="precio-anterior">USD 1118</h2>
                    <h2 className="precio-final">USD 227</h2>
                </div>
                <ul className="edit-li">
                    <li>
                        <img className="icon-small" src="img/icon-chulo.png" alt=""/>
                        <h2>Acceso inmediato a curso online Los Niños y El Dinero</h2>
                    </li>
                    <li>
                        <img className="icon-small" src="img/icon-chulo.png" alt=""/>
                        <h2>Más de 40 lecciones y diferentes recursos</h2>
                    </li>
                    <li>
                        <img className="icon-small" src="img/icon-chulo.png" alt=""/>
                        <h2>Actualizaciones frecuentes y para toda la vida al
                            programa. Inviertes una sola vez y recibe formación
                            constante</h2>
                    </li>
                </ul>
                <div className="bonus-programa">
                    <img className="icon-small" src="img/icon-gift.png" alt=""/>
                    <h2>Bonus del programa:</h2>
                </div>
                <ul className="edit-li padding-li">
                    <li>
                        <img className="icon-small" src="img/icon-gift.png" alt=""/>
                        <h2>Instructivos para los retos de producción de dinero e inversión</h2>
                    </li>
                    <li>
                        <img className="icon-small" src="img/icon-gift.png" alt=""/>
                        <h2>Declaraciones que usan Luciana y Mariapaz Reyes Castañeda</h2>
                    </li>
                    <li>
                        <img className="icon-small" src="img/icon-gift.png" alt=""/>
                        <h2>Hipnoterapia para crear mentalidad de abundancia en los niños</h2>
                    </li>
                    <li>
                        <img className="icon-small" src="img/icon-gift.png" alt=""/>
                        <h2>Descargables para la aplicación del método de ahorro superior</h2>
                    </li>
                    <li>
                        <img className="icon-small" src="img/icon-gift.png" alt=""/>
                        <h2>Plantilla para aprender a ponerle precio a mis primeros productos</h2>
                    </li>
                </ul>
                <img className="boton-unete" src="img/Botones (2).png" alt=""/>
                
            </div>
        </>
    );
  }