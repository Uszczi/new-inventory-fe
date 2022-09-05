<script setup lang="ts">
import { onMounted, ref } from "vue";
import MoviesService, { Movie } from "../../services/moviesService";

let movies = ref([] as Movie[]);

onMounted(async () => {
  console.log(`the component is now mounted.`);
  movies.value = await MoviesService.getMovies();
  console.log(movies);
});
</script>

<template>
  <v-table density="compact">
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
      <tr v-for="(movie, index) in movies" :key="index">
        <td>{{ index }}</td>
        <td>{{ movie.title }}</td>
        <td>{{ movie.watch_date }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ movie.production_year }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
