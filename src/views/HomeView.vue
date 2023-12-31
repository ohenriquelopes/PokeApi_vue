<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import ListPokemons from "./ListPokemons.vue";
import CardPokemonSelected from "@/components/CardPokemonSelected.vue";

let pokemons = reactive(ref());
let urlBaseSvg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
let searchPokemonField = ref();
let pokemonSelected = reactive(ref());
let loading = ref(false);

onMounted(()=>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then(response => response.json())
      .then(response => pokemons.value = response.results);
})

const filteredPokemons = computed(()=>{
  if(pokemons.value && searchPokemonField.value){
    return pokemons.value.filter(pokemon => pokemon.name.includes(searchPokemonField.value.toLowerCase()))
  }
  return pokemons.value;
})

const selectPokemon = async (pokemon) => {
  loading.value = true;
  await fetch(pokemon.url)
    .then(response => response.json())
    .then(response => pokemonSelected.value = response)
    .catch(error => alert(error))
    .finally(()=> loading.value = false)

  console.log(pokemonSelected.value)
}

</script>

<template>
  <main>
    <div class="container">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <card-pokemon-selected
          :name="pokemonSelected?.name"
          :xp="pokemonSelected?.base_experience"
          :height="pokemonSelected?.height"
          :img="pokemonSelected?.sprites.other.dream_world.front_default"
          :loading="loading"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card card-list">
            <div class="card-body row">
              <div class="mb-3">
                <label hidden for="searchPokemonField" class="form-label">Pesquisar...</label>
                <input v-model:="searchPokemonField" type="text" class="form-control" id="searchPokemonField" placeholder="Pokemons">
              </div>

              <ListPokemons
                v-for="pokemon in filteredPokemons"
                :key="pokemon.name"
                :name="pokemon.name"
                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
                @click="selectPokemon(pokemon)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .card-list{
      max-height: 75vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

</style>