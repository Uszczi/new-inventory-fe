<template>
  <div class="mt-10" style="width: 100%">
    <div
      class="d-flex align-center"
      style="align-items: center; justify-content: center"
    >
      <span class="text-h5 text-center">Record New Movie</span>
    </div>
    <v-row class="mt-2" style="">
      <v-col cols="12">
        <v-text-field label="Title" required></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          label="Directors (comma seperated)"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field label="Production year" required></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field label="Watch day" required></v-text-field>
      </v-col>
    </v-row>

    <div class="d-flex" style="justify-content: space-between">
      <v-btn color="red-lighten-2" text @click="dialog = false"> Cancel </v-btn>
      <v-btn color="green-lighten-2" text @click="dialog = false"> Save </v-btn>
    </div>
  </div>
</template>

<style scoped></style>
