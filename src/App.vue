<template>
  <v-app style="background-color: red">
    <v-layout style="background-color: #f9f9f9">
      <v-app-bar color="#D5C9DF">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>asdffads</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" bottom temporary>
        <v-list @update:selected="updateSelected" :items="items">
          <v-list-item>
            <router-link to="/movie"> Movie </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/"> Books </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/movies"> Movies </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="display: flex; justify-content: center" class="pl-3 pr-3">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    selectedPage: null,
    drawer: false,
    group: null,
    items: [
      {
        title: "Books",
        value: "foo",
      },
      {
        title: "Movies",
        value: "bar",
      },
      {
        title: "Series",
        value: "fizz",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
      console.log(group);
    },
  },
};
</script>
