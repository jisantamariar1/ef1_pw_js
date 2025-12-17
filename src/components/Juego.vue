<template>
    <div>
        <h1>Juego</h1>
        <img src="https://via.placeholder.com/250" alt="">
    </div>
</template>

<script>
import { consumirAPIFacade } from '@/clients/PokemonClient.js';
export default {
    data() {
        return {
            pokemonNombre: null,
            pokemonImagen: null
        }
    },
    methods:{
        async obtenerPokemon(){
            const pokemon = await consumirAPIFacade();
            this.pokemonNombre = pokemon.name;
            this.pokemonImagen = pokemon.sprites.front_default;
        }
    }

}
</script>

<style></style>