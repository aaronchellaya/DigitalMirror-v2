<template>
  <div>
    <div class="location-box">
      <!-- <div class="date"> {{ dateBuilder() }}</div> -->
    </div>
    <div class="weather-box">
      <div class="temp">{{ Math.round(weather.temp) }} °C</div>
      <v-layout style="color: white" align-center fill-height justify-center>
        {{ weather.name }} , {{ weather.country }}
        <div class="pl-4"><v-img class="px-4" :src="icon"></v-img></div>
      </v-layout>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      api_key: '5fc5e8281e6a52f06c2d2a4e7a02c76e',
      url_base: 'http://api.openweathermap.org/data/2.5/',
      query: '',
      weather: { name: '', country: '', temp: '', type: '' },
      icon: [],
      latitide: '',
      longitude: '',
    }
  },
  created() {
    const success = (position) => {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      console.log(this.latitide, this.longitude)
      this.fetchLocation()
    }

    const error = (err) => {
      console.log(err)
    }

    // This will open permission popup
    navigator.geolocation.getCurrentPosition(success, error)
    // this.fetchWeather()
  },
  methods: {
    async fetchLocation() {
      try {
        let response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${this.latitude}&lon=${this.longitude}&limit=5&appid=5fc5e8281e6a52f06c2d2a4e7a02c76e`
        )
        console.log(response.data[0].name)
        this.query = response.data[0].name
        this.fetchWeather()
      } catch (error) {
        console.log(error)
      }
    },

    async fetchWeather() {
      try {
        let response = await axios.get(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
        console.log(response.data)
        this.weather.name = response.data.name
        this.weather.country = response.data.sys.country
        this.weather.temp = response.data.main.temp
        // this.icon = response.data.weather[0].icon
        this.icon = `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
        // console.log(this.weather)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.img {
  color: white;
}
.location-box .location {
  color: white;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  color: white;
  font-size: 26px;
  font-weight: 800;
}
.weather-box .weather {
  color: white;
  font-size: 20px;
}

/* .weather-wrap {
  padding-right: 20px;
  padding-left: 350px;
} */
</style>
