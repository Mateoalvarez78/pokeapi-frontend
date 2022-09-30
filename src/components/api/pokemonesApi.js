import apiPokemones from './api'


const funcionesApi = {
  obtenerPokemones: async() => {
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
  obtenerStats: async() => {
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

};



export default funcionesApi;