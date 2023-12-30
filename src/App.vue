<script>
import {ref} from 'vue'

</script>

<template>

  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="./assets/icon.svg" alt="" height="40" class="d-inline-block align-text-center">
        PokeVite
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Content -->
  <div class="main">
    <router-view></router-view>
  </div>

  <footer class="bg-primary text-light py-3 text-center">
    <div>
      <span> {{ new Date().getFullYear() }} </span>
    </div>
  </footer>

</template>

<style>
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
