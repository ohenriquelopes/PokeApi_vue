<script setup>
  const pokemon = defineProps(["name", "xp", "height", "img", "loading"]);
</script>

<template>
  <div
      class="card CardPokemonSelected"
      :class="loading ? '' : 'animate__animated animate__flipInY'"
  >
    <img v-if="pokemon.name" :src="pokemon.img" class="card-img-top" :alt="pokemon.name" height="250">
    <img v-else src="https://raw.githubusercontent.com/yurimarcon/PokeVite/305b2449732026a2f631cbd5908fd2e178b2aa7e/src/assets/egg_pokemon.svg" class="card-img-top" :alt="pokemon.name" height="250">
    <div class="card-body">
      <h5 class="card-title text-center">{{ pokemon.name || '????'}}</h5>
      <hr>
      <div class="row">
        <section class="col">
          <strong>XP:</strong>
          <span>{{ pokemon.xp }}</span>
        </section>
        <section class="col">
          <strong>Peso:</strong>
          <span>{{ pokemon.height }}</span>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .CardPokemonSelected{
    height: 75vh;
    background: rgb(72,63,251);
    background: radial-gradient(circle, rgba(220,194,106,0.8) 0%, rgb(244, 0, 0, 0.8) 100%);
  }
</style>