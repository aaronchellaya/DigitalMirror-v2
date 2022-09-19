<template>
  <v-div>
    <v-row>
      <v-col cols="auto">
        <digital-clock />
      </v-col>
      <v-icon @click="goToHome()" color="white" x-large>mdi-home</v-icon>
      <br />
      <v-col align-self="center" cols="auto" justify="start">
        <welcome-msg />
      </v-col>
      <v-col align-self="center" class="px-4">
        <weather-info />
      </v-col>
    </v-row>
    <v-row class="mt-2 mx-n5" justify="space-around" align="center">
      <v-col cols="auto px-0">
        <flight-list :allFlights="leftFlights" />
      </v-col>
      <v-col cols="auto px-0">
        <flight-list :allFlights="rightFlights" />
      </v-col>
    </v-row>
    <!-- <v-row class="mt-12">
      <v-col cols="12">
        <marquee direction="left" class="white--text display-1" v-html="warningMsg"></marquee>
      </v-col>
    </v-row> -->

    <!-- <v-row class="mt-8 mr-4" justify="end">
      <v-avatar size="70" color="white" @click="()=>{this.$router.push('/video')}">
        <v-icon size="27" color="black">fas fa-play</v-icon>
      </v-avatar>
    </v-row>-->
  </v-div>
</template>

<script>
import DigitalClock from '../components/DigitalClock'
import FlightList from '../components/FlightList'
// import FlightFilter from "../components/FlightFilter";
import WelcomeMsg from '../components/WelcomeMsg'
import moment from 'moment'
import airportAPI from '../api/airportAPI'
import WeatherInfo from '@/components/WeatherInfo.vue'

export default {
  data() {
    return {
      leftFlights: [],
      rightFlights: [],
      leftFlightStatus: 'Delayed',
      rightFlightStatus: 'Cancelled',
      selectedFlight: '',
      intervalId: null,
      delayedFlights: [],
      timeFromApi: null,
      warningMsg:
        "Mr <span style='color: red'>Ramaprasad Varma</span>, \
                  This is your final call for <span style='color: red'>IndiGo 6E 189</span>\
                  at <span style='color: red'>Gate No 31</span>",
    }
  },
  components: {
    DigitalClock,
    FlightList,
    // FlightFilter,
    WelcomeMsg,
    WeatherInfo,
  },

  methods: {
    goToHome() {
      this.$router.push('/')
    },
    // onSelectFlight(flightId) {
    //   if (flightId == this.selectedFlight) {
    //     this.selectedFlight = "";
    //     this.setFlightStatusChangeInterval();
    //   } else {
    //     this.selectedFlight = flightId;
    //     this.leftFlights = [
    //       ...delayedFlights().filter(f => f.airline === flightId),
    //       ...gateChangedFlights().filter(f => f.airline === flightId)
    //     ];
    //     this.rightFlights = [
    //       ...cancelledFlights().filter(f => f.airline === flightId),
    //       ...lastCallFlights().filter(f => f.airline === flightId)
    //     ];
    //     clearInterval(this.intervalId);
    //   }
    // },
    getIST(utc) {
      let year = utc.substr(0, 4)
      let month = utc.substr(4, 2)
      let day = utc.substr(6, 2)
      let hour = utc.substr(8, 2)
      let min = utc.substr(10, 2)
      let time = `${year}-${month}-${day}`
      let timeMoment = moment(time).utcOffset(0)
      timeMoment.set({ hour, minute: min })
      return timeMoment.utcOffset('+05:30')
    },
    getTwoDigit(digit) {
      if (digit.toString().length == 1) {
        return `0${digit}`
      }
      return digit
    },
    async resetFlights() {
      let { airportData, time } = await airportAPI.getFlights()
      this.timeFromApi = time
      airportData = airportData.map((flight) => {
        const st = flight.st._
        if (st) {
          const istTime = this.getIST(st)
          const hour = this.getTwoDigit(istTime.hour())
          const minute = this.getTwoDigit(istTime.minute())
          flight.st._ = `${hour}:${minute}`
        }
        const et = flight.et._
        if (et) {
          const istTime = this.getIST(et)
          const hour = this.getTwoDigit(istTime.hour())
          const minute = this.getTwoDigit(istTime.minute())
          flight.et._ = `${hour}:${minute}`
        }
        return flight
      })
      const flightLength = airportData.length
      this.leftFlights = airportData.slice(0, flightLength / 2)
      this.rightFlights = airportData.slice(flightLength / 2)
    },
    setFlightStatusChangeInterval() {
      this.resetFlights()
      this.intervalId = setInterval(this.resetFlights, 1000 * 60)
    },
  },

  created() {
    this.setFlightStatusChangeInterval()
  },
}
</script>

<style scoped></style>
