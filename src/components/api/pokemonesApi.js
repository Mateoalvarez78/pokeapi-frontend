import axios from "axios";
import apiPokemones from "./api";

const funcionesApi = {
  obtenerPokemones: async () => {
    const url = "/";
    return await apiPokemones
      .get(url)
      .then((res) => {
        if (res.data.length > 0) {
          return res.data;
        } else {
          alert("No existe pokemon");
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  },
  obtenerStats: async () => {
    const url = "/stats";
    return await apiPokemones
      .get(url)
      .then((res) => {
        if (res.data.length > 0) {
          return res.data;
        } else {
          alert("No existe pokemon");
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  },

  agregarPokemon: async (nombre) => {
    const url = "/agregarPokemon";
    const body = { nombre: nombre };

    return await apiPokemones
      .post(url, body)

      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  },

  agregarUser: async (data) => {
    const url = "/registro";
    const body = { mail: data.mail, password: data.password };
    console.log("body:: ", body);
    return await apiPokemones
      .post(url, body)

      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  },

  login: async (data) => {
    const url = "/login";
    const body = { mail: data.mail, password: data.password };
    console.log("body:: ", body);
    return await apiPokemones
      .post(url, body)

      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  },

  agregarPokemon: async (nombre) => {
    const url = "/agregarPokemon";
    const body = { nombre: nombre };

    return await apiPokemones
      .post(url, body)
      
      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  },
};

export default funcionesApi;
