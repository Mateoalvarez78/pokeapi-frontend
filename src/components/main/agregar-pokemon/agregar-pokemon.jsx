import React from "react";
import { Link } from "react-router-dom";
import './agregar-pokemon.css'

const AgregarPokemon = () => {

    return(
        <>
                <Link className="card-pokemon-black" to={'/agregarPokemon'}>
                    <div className="foto-card-pokemon">
                        <img src="./Img/interrogacion.png" alt="" />
                    </div>
                    <p className="nombre-pokemon">Agregar</p>
                </Link>
        </>
    )

}

export default AgregarPokemon