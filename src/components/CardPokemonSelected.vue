<script setup>
  const pokemon = defineProps(["name", "xp", "height", "img" ]);
</script>

<template>
  <div class="card CardPokemonSelected">
    <img :src="pokemon.img" class="card-img-top" :alt="pokemon.name" height="250">
    <div class="card-body">
      <h5 class="card-title text-center">{{ pokemon.name }}</h5>
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
    height: 450px;
    background: rgb(72,63,251);
    background: radial-gradient(circle, rgba(220,194,106,0.6) 0%, rgb(244, 0, 0, 0.4) 100%);
  }
</style>