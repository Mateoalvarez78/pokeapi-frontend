import React from "react";
import "./Login.css"


const Login = () => {
    return (
        <div className="Contenedor">
            <div className="contenedor-imagen-pokemones">
                <img className="imagen-pokemones" src={require('../../../public/Img/FondoPokemones.jpg')}/>
            </div>
            <div className="descripcion-bienvenidos">
                    <div className="bienvenidos"><h1 className="titulo">¡BIENVENIDOS!</h1></div>
                    <div className="descripcion"><p>Esta es la Pokedex, aqui podras encontrar todos tus pokemones favoritos.</p></div>
                </div>
            <div className="input">
                
                <form>
                <input type="email" className="box" name="fname" placeholder="ejemplo@gmail.com"/><br></br>
                <input type="password" className="box" name="lname" placeholder="Contraseña"/><br></br>
                <input type="submit" value="" className="boton-submit">
                    
                </input>
                </form>
            </div>
        </div>   
    );
}

export default Login;