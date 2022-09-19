<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import MoviesService, { Movie } from "../services/moviesService";

let movies = ref([] as Movie[]);
let toDisplayMovies = ref([] as Movie[]);
let select = ref("Watch date");
let selectValue = ref("watch_date");
let items = ref(["Watch date", "Directors", "Published"]);
let dialog = ref(true);

watch(select, (newValue) => {
  if (newValue === "Watch date") {
    selectValue.value = "watch_date";
  } else if (newValue === "Directors") {
    selectValue.value = "director";
  } else {
    selectValue.value = "production_year";
  }
});

onMounted(async () => {
  movies.value = await MoviesService.getMovies();
  toDisplayMovies.value = movies.value;
});
</script>

<template>
  <div>
    <div style="display: flex; align-items: center">
      <v-text-field
        dense
        flat
        hide-details="auto"
        label="Search"
        clearable
      ></v-text-field>
      <v-btn class="mx-2" icon="mdi-plus" color="primary"></v-btn>
    </div>
    <v-row align="center">
      <v-col cols="7"
        ><div>Title ({{ movies.length }})</div></v-col
      >
      <v-col>
        <v-select dense v-model="select" variant="plain" :items="items">
        </v-select>
      </v-col>
    </v-row>

    <v-row v-for="(movie, index) in toDisplayMovies" :key="index">
      <v-col cols="8">{{ movie.title }}</v-col>
      <v-col>{{ movie[selectValue] }}</v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
