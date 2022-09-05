<script setup lang="ts">
import { onMounted } from "vue";
import MoviesTableElement from "./MoviesTableElement.vue";
import MoviesService from "../../services/moviesService";

let movies = null;

onMounted(() => {
  console.log(`the component is now mounted.`);
  movies = MoviesService.getMovies();
  console.log(movies);
});
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left"></th>
        <th class="text-left">Title</th>
        <th class="text-left">Watch date</th>
        <th class="text-left">Directors</th>
        <th class="text-left">Release date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>12.</td>
        <td>Matrix Rewolucja</td>
        <td>2012-12-12</td>
        <td>Lana Wachowski, Lilly Wachowski</td>
        <td>2003</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
