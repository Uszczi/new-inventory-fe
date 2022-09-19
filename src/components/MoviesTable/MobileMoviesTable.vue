<script setup lang="ts">
import { onMounted, ref } from "vue";
import MoviesService, { Movie } from "../../services/moviesService";

let movies = ref([] as Movie[]);

function toDisplay(movie: Movie): string {
  return `${movie.title} | ${movie.watch_date}`;
}

/* <td>{{ movie.director }}</td> */
/* <td>{{ movie.production_year }}</td> */

onMounted(async () => {
  movies.value = await MoviesService.getMovies();
});
</script>

<template>
  <div>
    <v-card
      v-for="(movie, index) in movies"
      :key="index"
      dense
      flat
      density="compact"
      variant="text"
      :title="movie.title"
      :subtitle="movie.title"
    >
    </v-card>
  </div>
</template>

<style scoped>
div {
  /* max-width: 100%; */
}
</style>
