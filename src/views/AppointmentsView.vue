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
    <v-layout justify-center>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&mode=WEEK&showPrint=0&src=YWFyb25jaGVsbGF5YTI1QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=b3RzZW85Z3E1NzcwYjkwM2xvMjM5YWszcm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%23009688&color=%237986CB"
        style="border: solid 1px #777"
        width="1200"
        height="525"
        frameborder="0"
        scrolling="no"
      ></iframe>
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
