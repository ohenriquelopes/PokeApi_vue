<script setup>
import { onMounted, reactive, ref } from "vue";
import ListPokemons from "./ListPokemons.vue";

let pokemons = reactive(ref());
let urlBaseSvg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

onMounted(()=>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then(response => response.json())
      .then(response => pokemons.value = response.results);
})

</script>

<template>
  <div class="container">
    <div class="row mt-4">
<!--      <div class="col-sm-12 col-md-6">-->
<!--        <div class="card" style="width: 18rem;">-->
<!--          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" class="card-img-top" alt="Mew">-->
<!--          <div class="card-body">-->
<!--            <h5 class="card-title">Card title</h5>-->
<!--            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <ListPokemons
              v-for="pokemon in pokemons"
              :key="pokemon.name"
              :name="pokemon.name"
              :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>