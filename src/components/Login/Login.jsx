import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate()

    const moverALogin = () => {
        navigate('/login')
    }

    return (
        <div className="Contenedor">
            <div className="contenedor-imagen-pokemones">
                <img className="imagen-pokemones" src={require('./assets/FondoPokemones2.jpg')}/>
            </div>
            <div className="descripcion-bienvenida">
                <div className="bienvenidos"><h1 className="titulo">¡BIENVENIDOS!</h1></div>
                <div className="descripcion-login"><p>Esta es la Pokedex, aqui podras encontrar todos tus pokemones favoritos.</p></div>
            </div>
            <div className="input">
                <form>
                    <input type="email" className="box" name="fname" placeholder="ejemplo@gmail.com"/><br></br>
                    <input type="password" className="box" name="lname" placeholder="Contraseña"/><br></br>
                    <input type="submit" value="" className="boton-submit"/>
                </form>
            </div>
        </div>   
    );
}

export default Login;