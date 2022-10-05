import React from "react";
import './Inicio.css'
import { useNavigate } from "react-router-dom";

const Inicio = () => {

    const navigate = useNavigate()

    const dirigirRegister = () => {
        navigate('/register')
    }

    const moverALogin = () => {
        navigate('/login')
    }
    return (
        <div className="contenedor-inicio">
            <div className="contenedor-bienvenida">
                <div className="descripcion-bienvenidos">
                        <div className="bienvenidos"><h1 className="titulo">¡BIENVENIDOS!</h1></div>
                        <div className="descripcion"><h4>Esta es la Pokedex, aqui podras encontrar todos tus pokemones favoritos.</h4></div>
                </div>
            </div>
            <div className="botones">
                <button className="boton-ingresar" onClick={moverALogin}>Ingresar</button>
                <button className="boton-registrar" onClick={dirigirRegister}>Registrarse</button>
            </div>
           <div className="pokeball-inicio"><img src={require('./assets/pngegg.png')} alt=""/></div> 
        </div>
    ) 
}

export default Inicio;