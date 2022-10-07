import "./card-pokemon.css"
import React from "react"
import Porcentajes from "./abouts-component"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import funcionesApi from "../api/pokemonesApi";

const Card = () => {
    
        const [pokemonApi, setPokemonApi] = useState([])
        const [stats, setStats] = useState([])
        const navigate = useNavigate()

        let {nombre} = useParams()

        
        
        async function getPokemon() {
            let data = await funcionesApi.obtenerPokemones()
            let data2 = await funcionesApi.obtenerStats()
            
            
            setPokemonApi([...data])
            setStats([...data2])
            
        }
    
        useEffect(() => {
            getPokemon()
        },[])

        let todosLosPokemones = pokemonApi.filter((pokemon) => {
            return pokemon.name === nombre
         })
       
        let pokemon = todosLosPokemones
        
        
        
       
    

    function moverIzquierda ()  {
        let index = todosLosPokemones.find((item) => item.name == nombre) 
        if(index.name === nombre){
            let pokemonAnterior = pokemonApi.find((item) => item.id == (Number(index.id) - 1))
            navigate("/" + pokemonAnterior.name)
            return
        }
    }

    function moverDerecha () {
        let index = todosLosPokemones.find((item) => item.name == nombre) 
        console.log("index ::",index)
        if (index.name === nombre){
            let pokemonSiguiente = pokemonApi.find((item) => item.cod == (Number(index.id) + 1))
            navigate("/" + pokemonSiguiente.name)
            return
        }
    } 

    return (
        <div className="Contenedor-principal">

            { pokemon.map ((pokemon) =>{
                return (

            <div className={`Contenedor-card ${pokemon.tipo1}`}>
            <div className="Para-el-background">
                <div className="Fondo-pokeball">
                    <img className="Imagen-pokeball" src ="./Img/pokeball-blanca.png" alt="pokeball"/>
                </div>
                <div className="botones-derecha-izquierda">
                   <div onClick={moverIzquierda} className="mover-izquierda"> &lt; </div>
                    <div onClick={moverDerecha} className="mover-derecha"> &gt; </div> 
                </div>
                
                <div className="Contenedor-name-id-pk">
                    <div className="Contenedor-nombre-pokemon">
                        <Link to="/pokemones"><img className="Boton-atras-flecha" src="./Img/flecha-izquierda-blanca.png" alt="Boton para regresar" /></Link>
                        <h2 className="Nombre-pokemon">{pokemon.name}</h2>
                    </div>
                    <div className="ID-pokemon">
                        <p>{pokemon.id}</p>
                    </div>
                </div>
            </div>  
            <img className="Imagen-pokemon" src={pokemon.img} alt={pokemon.nombre} />
            <div className="Contenedor-stats-pk">
                <div className="Tipo-pokemon">
                    <ul className="Tipo-pokemon-lista" style={{color: "white"}}>
                        <span className={`parrafo-tipo ${pokemon.tipo1}`}>{pokemon.tipo1}</span>
                        {pokemon.tipo2 ? (<span className={`parrafo-tipo ${pokemon.tipo2}`}>{pokemon.tipo2}</span>): null}
                    </ul>
                </div>
                <div className="Peso-altura-movimientos">
                    <h2 className={`About ${pokemon.tipo}`} style={{background  : "whitesmoke"}}>About</h2>
                    <div className="atributos-pokemon">
                        <div className="div-weight">
                            <div className="imagenYPeso">
                            <img className="imagen-weight" src="./Img/Weight.png" alt="Peso"/>
                            <p style={{color: "#212121"}}>{pokemon.weight}</p>
                            </div>
                            <p className="texto-weight">weight</p>
                        </div>
                        <div className="div-height">
                            <div className="imagenYAltura">
                            <img className="imagen-height" src="./Img/Height.png" alt="Altura"/>
                            <p style={{color: "#212121"}}>{pokemon.height}</p>
                            </div>
                            <p className="texto-height">height</p>
                        </div>
                            <div className="div-moves">
                            <p style={{color: "#212121"}} className={`parrafo-moves `}>{pokemon.move1}</p>
                            <p style={{color: "#212121"}} className={`parrafo-moves `}>{pokemon.move2}</p>
                            <p className="texto-moves">moves</p>
                        </div>
                    </div>
                </div>
                <div className="descripcion-pokemon" style={{color: "#212121"}}>
                    <p>detalle</p>
                </div>
                <div className="base-stats">
                    <h2 className={`texto-base-stats ${pokemon.tipo}`} style={{background: "whitesmoke"}} >Base Stats</h2>
                </div>
                <Porcentajes pokemon={pokemon} stats={stats}/>
            </div>
            </div>
                )
            })}
           
            

        
        </div>
    )
}

export default Card;