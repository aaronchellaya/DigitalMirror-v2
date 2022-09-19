<template>
  <v-layout>
    <v-flex>
      <v-toolbar color="black" class="white--text todo-header">
        <v-toolbar-title class="display-1">Sensors</v-toolbar-title>
      </v-toolbar>
      <v-list class="black white--text pt-4">
        <v-list-item v-for="(sensor, index) in sensorsList" :key="index">
          <v-list-item-content class="pb-2">
            <v-list-item-title v-text="sensor.name"></v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>
          {{sensor.value}}
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
// import userAPI from "../../api/userAPI";
export default {
  data() {
    return {
      sensorsList: [
        {
          name: "Proximity",
          value: "High"
        },
        {
          name: "Sensor 1",
          value: 7
        },
        {
          name: 'Sensor 2',
          value: 92
        }
      ]
    };
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
.todo-header {
  border-bottom: 2px solid white !important;
}
</style>
