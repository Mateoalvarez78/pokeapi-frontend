import { useState } from "react";
import React from "react";
import "./pokemon.css"
import { Link, Outlet } from "react-router-dom";
import Card from "../Section/card-pokemon";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import funcionesApi from "../api/pokemonesApi";


const Pokedex = ({POKE_ARRAY}) => {
    const navigate = useNavigate();
    
    
    const [estadoButton, setEstadoButton] = useState(0);
    const [mostrarIcono, setMostrarIcono] = useState(false)

    const [pokemonApi, setPokemonApi] = useState([])
    
    
    async function getPokemon() {
        let data = await funcionesApi.obtenerPokemones()
        setPokemonApi([...data])
    }

    useEffect(() => {
        getPokemon()
    },[])
    
    
    
    const handleInputChange = (e) => {
        if (e.target.value === "") {
      setPokemonApi(pokemonApi);
      setMostrarIcono(false)
      return;
    }
    const filteredList2 = pokemonApi.filter(
      (item) => item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    
    setPokemonApi(pokemonApi);
    setMostrarIcono(true)
    };
    

   

    const ordenarPokemon = () => {

        if(estadoButton === 0) {
            let arrayOrdenado = [...pokemonApi].sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
            setPokemonApi(arrayOrdenado)
            setEstadoButton(1)
            
        }

        else  {
            let arrayOrdenado2 = [...pokemonApi].sort((a, b) => a.name === b.id ? a.name > b.id ? -1 : 1 : 0);
            setPokemonApi(arrayOrdenado2)
            setEstadoButton(0)
        }
        
    }
    return (
        <>
            <header>
                <div className="container-nav">
                    <div className="img-container">
                        <img src="./img/Pokeball.png" alt="pokeball" className="pokeball-nav"/>
                        <h1>Pokedex</h1>
                    </div>
                    <div className="container-Order">
                        {estadoButton ? <div className="aZOrder">
                            <p onClick={ordenarPokemon}><b>A</b></p>
                            <p onClick={ordenarPokemon}><b>Z</b></p>
                        </div> : <p className="hash" onClick={ordenarPokemon}>#</p> }
                        
                            <i class="fa-solid fa-arrow-down" onClick={ordenarPokemon}></i>
                    </div>
                </div>
                <> <i class="fa-solid fa-magnifying-glass"></i></> 
                <div className="Input-search">
                    <input className="input-login" type="text" onChange={handleInputChange} placeholder="Buscar" />
                </div>
            </header>
            <div className="container-pokemon">
                
                 {pokemonApi.map((item, i) => { return (
                     <>
                     <Link key={item.name} className={`card-pokemon ${item.tipo[0]}`} 
                     to={`/${item.name}`}>
                        <div className="foto-card-pokemon">
                            <p className="id-pokemon">{item.id}</p>
                            <img src={item.img} alt="" />
                        </div>
                        <p className="nombre-pokemon">{item.name}</p>
                    </Link>
                </>
                    );
                })}
            </div>
            <Outlet/>
        </>
    
)}

export default Pokedex