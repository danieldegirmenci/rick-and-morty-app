<template>
  <NavBar />
  <router-view />
</template>

<style></style>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap");

* {
  background-color: #001736;
  font-family: "Montserrat", sans-serif;
}
</style>
