import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    const navigate = useNavigate()
    const [estadoInput, setEstadoInput] = useState ({
        mail: "",
        password : ""
    })

    const regresarAInicio = () => {
        navigate('/')
    }

    let handleMailInputChange = (e) => {
        setEstadoInput({...estadoInput, mail : e.target.value})
    }

    let handlePasswordInputChange = (e) => {
        setEstadoInput({...estadoInput, password : e.target.value})
    }

    console.log(estadoInput)

    return (
        <div className="Contenedor-login">
            <div className="volver-atras"><img src="./Img/flecha-izquierda-blanca.png" alt="" onClick={regresarAInicio}/></div>
            <div className="descripcion-bienvenida">
                <div className="bienvenidos"><h1 className="titulo">¡BIENVENIDOS!</h1></div>
                <div className="descripcion-login"><p>Esta es la Pokedex, aqui podras encontrar todos tus pokemones favoritos.</p></div>
            </div>
            <div className="input">
                <form>
                    <input type="email" className="box" name="fname" placeholder="ejemplo@gmail.com" onChange={handleMailInputChange}/><br></br>
                    <input type="password" className="box" name="lname" placeholder="Contraseña" onChange={handlePasswordInputChange}/><br></br>
                    <input type="submit" value="" className="boton-submit"/>
                </form>
            </div>
        </div>   
    );
}

export default Login;