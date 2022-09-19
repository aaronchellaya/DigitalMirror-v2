<template>
  <v-row>
    <v-col class="cal py-0">
      <v-row justify="center" style="background-color: #202020;">
        <v-col cols="auto">
          <span class="white--text title text-xs-center">January</span>
        </v-col>
      </v-row>
      <v-row class="red pa-0">
        <v-sheet height="300" width="400">
          <v-calendar dark ref="calendar" color="primary"></v-calendar>
        </v-sheet>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
</script>

<style scoped>
.cal {
  border: 1px solid white;
}
</style>