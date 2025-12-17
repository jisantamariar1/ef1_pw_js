import axios from "axios";
const consumirAPI = async (idPokemon) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`).then(r=>r.data);
    return respuesta;
}
export async function consumirAPIFacade(idPokemon){
    return await consumirAPI(idPokemon);
}