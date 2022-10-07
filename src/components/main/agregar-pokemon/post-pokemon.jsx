import React from "react";
import './post-pokemon.css';
import { useState } from "react";
import funcionesApi from "../../api/pokemonesApi";
import { useNavigate } from "react-router-dom";


const PostPokemon = () => {
    const navigate = useNavigate()
    const [handleInputChange, setHandleInputChange] = useState("")
    const [estadoModal, setEstadoModal] = useState(false)

    const valorInput = (e) => {
        setHandleInputChange(e.target.value)
    }
    
    async function crearPokemon() {
        try {
           await funcionesApi.agregarPokemon(handleInputChange.toLowerCase())
            setEstadoModal(true)
        } catch (error) {
            navigate('/error')
        }
        
    }

    const regresarLink = () => {
        navigate('/pokemones')
    }

    const ingresar = () => {
        navigate('/pokemones') 
    }

    return  (

        <section className="container-postPokemon">    
            {estadoModal  ? (<div className="modal-postPokemon">
                <h2>Se agregó correctamente {handleInputChange} </h2>
                <button onClick={ingresar}>Volver</button>
                <div className="pikachu-feliz"></div>
            </div>) : <><form action="agregar" className="formulario-agregar">
                <h2>Agregar Pokemon</h2>
                <br />
                <input type="text" placeholder="Name" onChange={valorInput}/>
                <br />
            </form>
                <button onClick={crearPokemon} className="botonAgregar">Agregar</button>
                <button onClick={regresarLink} className="botonRegresar">Regresar</button></>}
            
        </section>
    )
}

export default PostPokemon