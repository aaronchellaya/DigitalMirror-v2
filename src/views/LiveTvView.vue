<template>
  <div>
    <v-row>
      <DigitalClock />
      <v-layout align-center class="home"
        ><v-icon @click="goToHome()" color="white" x-large>mdi-home</v-icon>
      </v-layout>
      <div class="weather-wrap">
        <v-layout justify-center align-center fill-height
          ><weather-info
        /></v-layout>
      </div>
    </v-row>
    <v-row class="pt-16">
      <v-col>
        <v-card
          @click="goToNetflix()"
          class="mx-auto"
          max-width="344"
          height="200"
        >
          <v-layout align-center justify-center fill-height class="title">
            <p>Netflix</p>
          </v-layout>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          @click="goToHotstar()"
          class="mx-auto"
          max-width="344"
          height="200"
        >
          <v-layout align-center justify-center fill-height class="title">
            <p>Hotstar</p>
          </v-layout>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          @click="goToYoutube()"
          class="mx-auto"
          max-width="344"
          height="200"
        >
          <v-layout align-center justify-center fill-height class="title">
            <p>Youtube</p>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
    <br />
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
    goToNetflix() {
      window.open('https://www.netflix.com/browse')
    },
    goToYoutube() {
      window.open('https://www.youtube.com/')
    },
    goToHotstar() {
      window.open('https://www.hotstar.com/in')
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
