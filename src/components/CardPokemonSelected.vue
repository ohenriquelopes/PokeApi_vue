<script setup>
  const pokemon = defineProps(["name", "xp"]);
</script>

<template>
  <div class="card">
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" class="card-img-top" alt="Mew">
    <div class="card-body">
      <h5 class="card-title text-center">Card title</h5>
      <hr>
      <div class="row">
        <section class="col">
          <strong>XP:</strong>
          <span>{{ pokemon.xp }}</span>
        </section>
        <section class="col">
          <strong>XP:</strong>
          <span>50</span>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>