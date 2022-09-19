<template>
  <v-container class="white--text" v-if="celsius">
    <span class="display-3">
      <v-icon color="white" size="42" medium left>fas fa-cloud-sun</v-icon>
      {{celsius}}&deg;
    </span>
  </v-container>
</template>

<script>
import weatherAPI from "../../api/weatherAPI";
export default {
  data() {
    return {
      celsius: "28"
    };
  },

  methods: {
    kelvinToCelsius(kelvin) {
      return kelvin - 273.15;
    },
    async fetchCurrentWeather() {
      const result = await weatherAPI.getCurrentWeatherData();
      this.celsius = this.kelvinToCelsius(result.main.temp).toFixed(2);
      const nextFetchTime = 1000 * 60 * 10;
      setTimeout(this.fetchCurrentWeather, nextFetchTime);
    }
  },

  mounted() {
    // this.fetchCurrentWeather();
  }
};
</script>
