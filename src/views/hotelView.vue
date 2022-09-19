<template>
  <div>
    <v-container fluid>
      <v-row>
        <div class="d-flex justify-content-start">
          <v-col><DigitalClock /></v-col>
          <v-icon @click="goToHome()" color="white" x-large>mdi-home</v-icon>
        </div>
        <v-col>
          <div class="weather-wrap pt-14">
            <v-layout justify-center align-center fill-height>
              <v-spacer></v-spacer>
              <WeatherInfo />
            </v-layout>
          </div>
        </v-col>
      </v-row>

      <v-layout px-15 wrap>
        <v-flex xs4>
          <v-layout justify-start wrap>
            <v-flex xs12 text--xs-left> </v-flex>
            <v-flex xs8 mt-4>
              <nearby-places></nearby-places>
            </v-flex>
            <!-- <v-flex xs8 mt-5 pt-5>
          <v-avatar size="50" color="black" @click="moveToVideo()">
            <v-icon size="50" color="white">mdi-arrow-left-bold-circle-outline</v-icon>
          </v-avatar>
        </v-flex>-->
          </v-layout>
        </v-flex>
        <v-flex xs4>
          <v-layout justify-center wrap>
            <v-flex>
              <greetings />
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 pr-3>
          <v-layout justify-end wrap>
            <v-flex xs12 mt-5>
              <v-layout justify-end>
                <v-flex xs10>
                  <todo-list />
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs10>
              <video-player />
            </v-flex>
            <v-flex xs10 mt-10>
              <hotel-menu />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DigitalClock from '../components/DigitalClock.vue'
import WeatherInfo from '../components/WeatherInfo.vue'
import Greetings from '../components/hotelComponents/GreetingsComponent.vue'
import TodoList from '../components/hotelComponents/TodoList.vue'
// import EmailList from "../components/hotelComponents/EmailList";
import HotelMenu from '../components/hotelComponents/MenuComponent.vue'
import NearbyPlaces from '../components/hotelComponents/NearbyPlaces.vue'
import videoPlayer from '../components/videoComponent.vue'
// import Calendar from "../components/hotelComponents/Calendar";

export default {
  data() {
    return {
      attributes: [
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        },
      ],
    }
  },
  components: {
    DigitalClock,
    Greetings,
    HotelMenu,
    NearbyPlaces,
    // Calendar
    TodoList,
    videoPlayer,
    WeatherInfo,
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    moveToVideo() {
      this.$router.push('/video')
    },

    attachSocketListeners() {
      this.$io.on('userLoggedOut', () => {
        this.$router.push('/')
      })
    },
  },
  async beforeMount() {
    // this.attachSocketListeners();
  },
}
</script>
