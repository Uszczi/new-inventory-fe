<template>
  <v-app>
    <v-row>
      <v-col>
        <v-card max-width="1100px" min-height="500px">
          <v-tabs v-model="tab" background-color="primary">
            <v-tab value="one">Movies</v-tab>
            <v-tab value="two">Series</v-tab>
            <v-tab value="three">Books</v-tab>
            <v-tab value="hree">TODO</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <MoviesTableVueM />
              </v-window-item>
              <v-window-item value="two">
                <MoviesTableVue />
              </v-window-item>
              <v-window-item value="three">
                <MoviesTableVue />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="page_wrapper"></div>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

import MoviesTableVue from "./MoviesTable/MoviesTable.vue";
import MoviesTableVueM from "./MoviesTable/MobileMoviesTable.vue";

const tab = ref(null);
</script>

<style scoped>
.page_wrapper {
  display: flex;
  justify-content: center;
}
</style>
