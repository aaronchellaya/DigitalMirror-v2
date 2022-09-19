<template>
  <v-layout>
    <v-flex>
      <v-toolbar color="black" class="white--text todo-header">
        <v-toolbar-title class="display-1">Nearby Places</v-toolbar-title>
      </v-toolbar>
      <v-layout column mt-2>
        <v-flex v-for="(place, index) in nearbyPlaces" :key="index" mt-4>
          <v-layout>
            <v-flex shrink>
              <v-list-item-avatar tile size="100">
                <img :src="place.imageURL" />
              </v-list-item-avatar>
            </v-flex>
            <v-flex ml-3>
              <v-layout column>
                <v-flex
                  ><span class="white--text title font-weight-bold">{{
                    place.title
                  }}</span></v-flex
                >
                <v-flex>
                  <span class="white--text">{{ place.rating }}</span>
                  <span class="white--text">{{ place.stars }}</span>
                </v-flex>
                <v-flex mt-1
                  ><span class="white--text">{{ place.location }}</span></v-flex
                >
                <v-flex
                  ><span class="white--text">{{
                    place.description
                  }}</span></v-flex
                >
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- <v-list three-line class="black white--text pt-4">
        <template v-for="(item, index) in nearbyPlaces">
          <v-list-item :key="index" avatar>
            <v-list-item-avatar tile size="70">
              <img :src="item.imageURL" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-sub-title
                class="white--text"
                v-html="item.description"
              ></v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list> -->
    </v-flex>
  </v-layout>
</template>

<script>
// import userAPI from "../../api/userAPI";

export default {
  data() {
    return {
      nearbyPlaces: [
        {
          imageURL: 'images/shiva.png',
          title: "Shivoham Shiva Temple",
          rating: "4.1",
          stars: "★★★★☆",
          location: "Bengaluru, Karnataka",
          description: "Temple complex with a large Shiva statue"
        },
        {
          imageURL: 'images/hal.png',
          title: "HAL Heritage Centre and Aerospace Museum",
          rating: "4.4",
          stars: "★★★★☆",
          location: "Bengaluru, Karnataka",
          description: "Exhibits about aerospace history"
        },
        {
          imageURL: 'images/palace.png',
          title: "Bangalore Palace",
          rating: "3",
          stars: "★★★☆☆",
          location: "Bengaluru, Karnataka",
          description: "Royal residence open for visits & events"
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
