import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  return response;
});

const Api = {
  getPokemonList: (offset = 0) =>
    axiosInstance.get(`/pokemon?limit=10&offset=${offset}`),
  getPokemonDetail: (pokemonId = 0) =>
    axiosInstance.get(`/pokemon/${pokemonId}`),
};

export { Api };
