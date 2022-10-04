import React from "react";
import './Inicio.css'

const Inicio = () => {
    return (
        <div className="contenedor">
             <div className="contenedor-imagen-pokemones">
                <img className="imagen-pokemones" src={require('../../../public/Img/FondoPokemones.jpg')}/>
            </div>
            <div className="descripcion-bienvenidos">
                    <div className="bienvenidos"><h1 className="titulo">¡BIENVENIDOS!</h1></div>
                    <div className="descripcion"><h4>Esta es la Pokedex, aqui podras encontrar todos tus pokemones favoritos.</h4></div>
            </div>
            <div className="botones">
                <button className="boton-ingresar">Ingresar</button>
                <button className="boton-registrar">Registrarse</button>
            </div>
            <div className="contenedor-imagen-pikachu">
                <img className="imagen-pikachu-saludando" src={require('../../../public/Img/pikachu_saludando.png')}/>
            </div>
        </div>
    )
}

export default Inicio;