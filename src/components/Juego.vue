<template>
    <div>
        <img :src="cambiarImagen" alt="imagen de pokemon">
        <h1>{{ pokemonNombre }}</h1>
        <button v-on:click="obtenerPokemon()"></button>
    </div>
</template>

<script>
import { consumirAPIFacade } from '@/clients/PokemonClient.js';
export default {
    data() {
        return {
            pokemonNombre: "XXXXXXX",
            pokemonImagen: null
        }
    },
   
    props: {
        url: String
    },
    methods:{
        async obtenerPokemon(){
            const pokemon = await consumirAPIFacade(this.aleatorioPokemon());
            this.pokemonNombre = pokemon.name;
            this.pokemonImagen = pokemon.sprites.front_default;
        },
        aleatorioPokemon(){
            const id = Math.floor(Math.random() * 5) + 1;
            return id;
        }
    },
    computed:{
        cambiarImagen(){
            if(this.pokemonImagen === null){
                return this.url;
            }else{
                return this.pokemonImagen;
            }
            
        }
    }

}
</script>

<style></style>