<template>
  <v-layout>
    <v-flex>
      <v-toolbar color="black" class="white--text todo-header">
        <v-toolbar-title class="display-1">Rules</v-toolbar-title>
      </v-toolbar>
      <v-divider dark class="divider mb-3"></v-divider>
      <p
        class="white--text title"
      >1. If you turn it on, turn it off.</p>
      <p
        class="white--text title"
      >2. Keep it Clean.
      </p>
      <p
        class="white--text title"
      >3. Do not leave your dishes in sink.
      </p>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.todo-header {
  border-bottom: 2px solid white !important;
}
</style>
