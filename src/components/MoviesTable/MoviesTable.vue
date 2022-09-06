<script setup lang="ts">
import { onMounted, ref } from "vue";
import MoviesService, { Movie } from "../../services/moviesService";

let movies = ref([] as Movie[]);
let drawer = ref(false);
let group = ref(2);
let items = ref([
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);

onMounted(async () => {
  console.log(`the component is now mounted.`);
  movies.value = await MoviesService.getMovies();
  console.log(movies);
});
</script>

<template>
  <div>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Watch date</th>
          <th class="text-left">Directors</th>
          <th class="text-left">Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(movie, index) in movies" :key="index">
          <td>{{ movie.title }}</td>
          <td>{{ movie.watch_date }}</td>
          <td>{{ movie.director }}</td>
          <td>{{ movie.production_year }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>
div {
  /* max-width: 100%; */
}
</style>
