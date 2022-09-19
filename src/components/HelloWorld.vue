<template>
  <div>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      bottom
      temporary
      style="
        max-width: 200px;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      "
    >
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <MoviesTableVue />
  </div>
</template>

<script lang="ts">
import MoviesTableElementVue from "./MoviesTable/MoviesTableElement.vue";
import MoviesTableVue from "./MoviesTable/MoviesTable.vue";

export default {
  components: { MoviesTableVue },
  data: () => ({
    drawer: false,
    group: null,
    items: [
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
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
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
