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
          ><weather-info
        /></v-layout>
      </div>
    </v-row>
    <v-layout justify-center>
      <v-card class="mx-auto">
        <v-card-text>
          <p align="center" class="text-h4 text--primary">Scan the QR Code</p>
          <img src="../assets/images/QR_code.png" />
        </v-card-text>
      </v-card>
    </v-layout>
    <footer-component />
  </div>
</template>

<script>
import DigitalClock from '@/components/DigitalClock.vue'
import WeatherInfo from '@/components/WeatherInfo.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  data() {
    return {
      items: [
        {
          src: 'https://mail.ledgermail.io/favicon.png',
        },
        {
          src: 'https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19714.png',
        },
        {
          src: 'https://cdn.globalcarsbrands.com/wp-content/uploads/2014/10/Rolls-Royce-Logo.jpg',
        },
        {
          src: 'https://seeklogo.com/images/F/ferrari-logo-C75D80471C-seeklogo.com.png',
        },
      ],
    }
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
/* p {
  color: white;
} */
</style>
