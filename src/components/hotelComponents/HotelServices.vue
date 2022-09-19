<template>
  <v-layout>
    <v-flex>
      <v-toolbar color="black" class="white--text header">
        <v-toolbar-title class="display-1">Hotel Service</v-toolbar-title>
      </v-toolbar>
      <v-list class="black white--text pt-4">
        <v-list-item v-for="(service, index) in hotelServiceList" :key="index">
          <v-list-item-content class="pb-2">
            <v-list-item-title v-text="service" class="title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      maxLimit: 10,
      hotelServiceList: ['Room Cleaning', 'Book Laundry']
    };
  }
};
</script>

<style scoped>
.header {
  border-bottom: 2px solid white !important;
}
</style>
