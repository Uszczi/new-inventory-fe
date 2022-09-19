<template>
  <v-app>
    <div class="page_wrapper">
      <v-card min-width="1100px" max-width="1100px" min-height="500px">
        <v-tabs v-model="tab" background-color="primary">
          <v-tab value="one">Movies</v-tab>
          <v-tab value="two">Series</v-tab>
          <v-tab value="three">Books</v-tab>
          <v-tab value="hree">TODO</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <MoviesTableVue />
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
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

import MoviesTableVue from "./MoviesTable/MoviesTable.vue";

const tab = ref(null);
</script>

<style scoped>
.page_wrapper {
  display: flex;
  justify-content: center;
}
</style>
