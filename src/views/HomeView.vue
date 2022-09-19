<template>
  <v-container fluid>
    <v-row>
      <digital-clock />
      <v-layout align-center class="home"> </v-layout>
      <div class="weather-wrap">
        <v-layout justify-center align-center fill-height><Weather /></v-layout>
      </div>
    </v-row>
    <v-container fluid class="cont black--text">
      <v-row class="pt-2">
        <v-col>
          <Interactive />
        </v-col>
        <v-col>
          <StaticPromos />
        </v-col>
        <v-col>
          <DyanamicPromos />
        </v-col>
      </v-row>
      <v-row class="pt-2">
        <v-col>
          <FeedBack />
        </v-col>
        <v-col>
          <v-card
            @click="goToNotification()"
            class="mx-auto"
            max-width="344"
            height="150"
          >
            <div v-if="this.$store.state.toggleNotification == true">
              <v-layout
                align-center
                justify-end
                pa-4
                style="background-color: green"
              ></v-layout>
            </div>
            <div v-else>
              <v-layout
                align-center
                justify-end
                pa-4
                style="background-color: white"
              ></v-layout>
            </div>

            <v-layout align-center justify-center mt-6 class="title">
              <p>Notification</p>
            </v-layout>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="goToIndustry()"
            class="mx-auto"
            max-width="344"
            height="150"
          >
            <v-layout align-center justify-center fill-height class="title">
              <p>Industry</p>
            </v-layout>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="pt-2">
        <v-col>
          <v-card
            @click="goToAppointment()"
            class="mx-auto"
            max-width="344"
            height="150"
          >
            <v-layout align-center justify-center fill-height class="title">
              <p>Appointments</p>
            </v-layout>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="goToLiveTv()"
            class="mx-auto"
            max-width="344"
            height="150"
          >
            <v-layout align-center justify-center fill-height class="title">
              <p>Live TV</p>
            </v-layout>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <footer-component />
  </v-container>
</template>

<script>
import Weather from '../components/WeatherInfo.vue'
import DigitalClock from '../components/DigitalClock.vue'
import Interactive from '../components/InteractiveCard.vue'
import StaticPromos from '../components/StaticPromosCard.vue'
import DyanamicPromos from '@/components/DyanamicPromos.vue'
import FeedBack from '../components/FeedBack.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  data() {
    return {
      toggle: false,
      card: false,
    }
  },
  components: {
    DigitalClock,
    Interactive,
    Weather,
    StaticPromos,
    DyanamicPromos,
    FeedBack,
    FooterComponent,
  },

  methods: {
    goToNetflix() {
      window.open('https://www.netflix.com/browse')
    },
    goToIndustry() {
      this.$router.push('/industry')
    },
    goToAppointment() {
      this.$router.push('/appointments')
    },
    goToLiveTv() {
      this.$router.push('/livetv')
    },

    goToNotification() {
      this.$store.dispatch('setNotification')
      // this.toggle = !this.toggle
      // this.card = !this.card
    },
  },
}
</script>

<style>
.weather-wrap {
  padding-right: 100px;
}
marquee {
  color: white;
}
.home {
  padding-left: 40px;
}
</style>
