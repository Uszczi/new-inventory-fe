<template>
  <div>
    <MoviesTableVue />
  </div>
</template>

<script setup lang="ts">
import MoviesTableElementVue from "./MoviesTable/MoviesTableElement.vue";
import MoviesTableVue from "./MoviesTable/MoviesTable.vue";
</script>

<style scoped>
div {
  display: flex;
  margin-top: 100px;
  /* background-color: red; */
  /* height: 100%; */
  justify-content: center;
}
</style>
