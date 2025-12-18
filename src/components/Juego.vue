<template>
    <div class="componente-container">
        <img :src="cambiarImagen" alt="imagen de pokemon">
        <h1>{{ pokemonNombre }}</h1>
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
        url: String,
        contador:Number,
    },
    methods:{
        async obtenerPokemon(){
            const numeroObtenido = this.aleatorioPokemon();
            const pokemon = await consumirAPIFacade(numeroObtenido);
            this.pokemonNombre = pokemon.name;
            this.pokemonImagen = pokemon.sprites.front_default;
            this.$emit('pokemon-obtenido', numeroObtenido);
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
    },
    watch:{
        contador(newValue, oldValue){
            if(newValue !== oldValue){
                this.obtenerPokemon();
            }
        }
    }

}
</script>

<style scoped>
    img{
        width: 250px;
        height: 250px;
        margin:10px;
    }
    .componente-container{
        text-align: center;
        margin-top: 10px;
    }

</style>