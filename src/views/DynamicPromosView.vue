<template>
  <div>
    <v-row>
      <DigitalClock />
      <v-layout align-center class="home"
        ><v-icon @click="goToHome()" color="white" x-large
          >mdi-home</v-icon
        ></v-layout
      >
      <div class="weather-wrap">
        <v-layout justify-center align-center fill-height
          ><WeatherInfo
        /></v-layout>
      </div>
    </v-row>
    <v-row justify="space-around">
      <video width="400" height="250" controls autoplay>
        <source
          src="../assets/videos/Daenerys Targaryen - Paint it Black.mp4"
          type="video/mp4"
        />
      </video>
    </v-row>
    <v-row justify="space-around">
      <!-- <iframe
        width="400"
        height="253"
        src="https://www.youtube.com/embed/t0Q2otsqC4I"
        title="Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> -->
      <video width="400" height="250" controls="controls">
        <source
          src="../assets/videos/Avengers- Infinity War (2018) - -Endgame- - Movie Clip.mp4"
          type="video/mp4"
        />
      </video>
      <iframe
        width="450"
        height="250"
        src="https://www.youtube.com/embed/AGBjI0x9VbM"
        title="Tom & Jerry | Best of Little Quacker | Classic Cartoon Compilation | WB Kids"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-row>
    <br />
    <footer-component />
  </div>
</template>

<script>
import DigitalClock from '@/components/DigitalClock.vue'
import WeatherInfo from '@/components/WeatherInfo.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  data() {
    return {}
  },

  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },

  components: { DigitalClock, WeatherInfo, FooterComponent },
}
</script>

<style scoped>
.home {
  padding-left: 40px;
}
</style>
