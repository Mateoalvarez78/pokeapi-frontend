import React from "react";
import "./Error.css"

const Error = () => {
    return (
        <div className="contenedor">
            <div className="contenedor-imagen">
                <img className="imagen-error" src={require("../../../public/Img/Error_404.png")}/>
            </div>
            <div className="mensaje">
                <div className="oops"><h1>Oops!</h1></div>
                <div className="descripcion"><h3>Al parecer a sucedido un error. No es posible encontrar el pokemon que usted solicito.</h3></div>
            </div>
            <div className="pikachu-enojado">
                <img className="pikachu-enojado-imagen" src={require("../../../public/Img/pika_enojado.png")}/>
            </div>
        </div>
    )
}

export default Error;