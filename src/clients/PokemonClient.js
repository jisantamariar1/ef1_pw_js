import axios from "axios";
const consumirAPI = async () => {
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/{idPokemon}").then(r=>r.data);
    return respuesta;
}
export async function consumirAPIFacade(){
    return await consumirAPI();
}