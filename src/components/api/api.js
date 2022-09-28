
import axios from "axios";


const POKE_API = "http://localhost:3010/pokemones/"

let apiPokemones = axios.create({
  baseURL: POKE_API,
  headers: { "Content-Type": "application/json" },
});


export default apiPokemones