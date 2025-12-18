<template>
    <div v-if="puedeJugar" class="juego">
    <div class="cabecera-juego">
        <h1>Puntaje: {{ puntaje }}</h1>
        <h1>Intento: {{ contadorV }}</h1>
    </div>

    <div class="view-container">
        <Juego url="https://dummyimage.com/250x250" :contador="contadorV"
        v-on:pokemon-obtenido="actualizarPuntaje"/>
        <Juego url="https://dummyimage.com/250x250" :contador="contadorV"
        v-on:pokemon-obtenido="actualizarPuntaje"/>
        <Juego url="https://dummyimage.com/250x250" :contador="contadorV"
        v-on:pokemon-obtenido="actualizarPuntaje"/>
    </div>
    <div class="botones">
        <button v-on:click="aumentarContador()">Jugar</button>
    </div>
    </div>
    <div v-if="gano" class="gano">
        <h1>Puntaje: {{ puntaje }}</h1>
        <h1>Felicitaciones has ganado un premio de $10.000,00</h1>
        <button v-on:click="reiniciarJuego()">Nuevo Juego</button>
    </div>
    <div v-if="perdio" class="perdio">
        <h1>Haz utilizado tus 5 intentos</h1>
        <h1>El juego ha termindo, intentalo nuevamente</h1>
        <button v-on:click="reiniciarJuego()">Nuevo Juego</button>
    </div>
</template>

<script>
import Juego from '@/components/Juego.vue';
export default {
    components: {
        Juego
    },
    data() {
        return {
            contadorV:0,
            puntaje:0,
            vectorResultado:[],
            puedeJugar:true,
            gano:false,
            perdio:false,
            

        }
    },
    methods: {
        aumentarContador(){
            return this.contadorV++;
            
                
        },
        actualizarPuntaje(pokemonNombre){
            this.vectorResultado.push(pokemonNombre);
            if(this.vectorResultado[0]===this.vectorResultado[1] && this.vectorResultado[0]===this.vectorResultado[2]){
                this.puntaje+=5;
            }else if(this.vectorResultado[0]===this.vectorResultado[1] || this.vectorResultado[0]===this.vectorResultado[2] || this.vectorResultado[1]===this.vectorResultado[2]){
                this.puntaje+=2;
            }else{
                this.puntaje+=0;
            }
            this.vectorResultado=[];
    


        },
        perdioJuego(){
            this.puedeJugar=false;
            this.perdio=true;
        },
        ganoJuego(){
            this.puedeJugar=false;
            this.gano=true;
        },
        reiniciarJuego(){
            this.contadorV=0;
            this.puntaje=0;
            this.vectorResultado=[];
            this.puedeJugar=true;
            this.perdio=false;
            this.gano=false;
        }


    },
    watch:{
        contadorV(newValue, oldValue){
            if(newValue===5){
                this.perdioJuego();
            }
        },
        puntaje(newValue, oldValue){
            if(newValue>=10){
                this.ganoJuego();
            }
        },
    }


}
</script>

<style scoped>
.view-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.cabecera-juego {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    gap: 300px;
    margin-top: 50px;
}
.botones{
    display: flex;
    justify-content: center;
    align-content: center;
    
}
button{
    font-size: 50px;
    padding-left: 100px;
    padding-right: 100px;
    border: 5px solid black;
}
.perdio{
    text-align: center;
    margin-top: 200px;
    color:red;
}
.gano{
    text-align: center;
    margin-top: 200px;
    color:rgb(11, 89, 235);
}
</style>