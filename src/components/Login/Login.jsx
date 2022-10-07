import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import funcionesApi from "../api/pokemonesApi";


const Login = () => {

    const navigate = useNavigate()
    const [estadoInput, setEstadoInput] = useState ({
        mail: "",
        password : ""
    });
    const [submitted, setSubmitted] = useState(false);

    const regresarAInicio = () => {
        navigate('/')
    }

    let handleMailInputChange = (e) => {
        setEstadoInput({...estadoInput, mail : e.target.value})
    }

    let handlePasswordInputChange = (e) => {
        setEstadoInput({...estadoInput, password : e.target.value})
    }

    const ingresarApp = async (e) => {

        e.preventDefault();

        setSubmitted(true)
        await funcionesApi.login({mail : estadoInput.mail, password : estadoInput.password})
        navigate('/pokemones')
    }

    

    return (
        <div className="Contenedor-login">
            <div className="volver-atras"><img src="./Img/flecha-izquierda-blanca.png" alt="" onClick={regresarAInicio}/></div>
            <div className="descripcion-bienvenida">
                <div className="bienvenidos"><h1 className="titulo">¡BIENVENIDOS!</h1></div>
                <div className="descripcion-login"><p>Esta es la Pokedex, aqui podras encontrar todos tus pokemones favoritos.</p></div>
            </div>
            <div className="input">
                <form onSubmit={ingresarApp}>

                    {!estadoInput.mail && submitted && (<span><p>Favor de completar los datos</p></span>)}   
                    <input type="email" className="box" name="fname" placeholder="ejemplo@gmail.com" onChange={handleMailInputChange}/><br></br>
                    {!estadoInput.password && submitted && (<span><p>Favor de completar los datos</p></span>)}  
                    <input type="password" className="box" name="lname" placeholder="Contraseña" onChange={handlePasswordInputChange}/><br></br>
                    <input type="submit" value="" className="boton-submit"/>
                </form>
            </div>
        </div>   
    );
}

export default Login;