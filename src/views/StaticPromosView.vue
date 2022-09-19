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
    <v-carousel
      hide-delimiters
      cycle
      height="calc(100vh - 28vh)"
      :show-arrows="false"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <!-- max-height="calc(100vh - 60px)"
            max-width="calc(100wh - 60px)" -->
        <v-layout justify-center fill-height>
          <v-img
            v-if="item.isVideo == false"
            contain
            height="auto"
            max-height="65vh"
            :src="item.src"
          >
          </v-img>
          <video
            v-else
            width="1000"
            height="500"
            autoplay
            muted
            :src="item.src"
          ></video>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
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
      imageView: true,
      videoView: false,
      items: [
        {
          src: 'https://mail.ledgermail.io/favicon.png',
          isVideo: false,
        },
        {
          src: require('@/assets/videos/video3.mp4'),
          isVideo: true,
        },
        {
          src: 'https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19714.png',
          isVideo: false,
        },
        {
          src: require('@/assets/videos/video4.mp4'),
          isVideo: true,
        },

        {
          src: 'https://cdn.globalcarsbrands.com/wp-content/uploads/2014/10/Rolls-Royce-Logo.jpg',
          isVideo: false,
        },
        {
          src: 'https://seeklogo.com/images/F/ferrari-logo-C75D80471C-seeklogo.com.png',
          isVideo: false,
        },
        {
          src: require('@/assets/videos/video.mp4'),
          isVideo: true,
        },
        {
          src: require('@/assets/videos/video1.mp4'),
          isVideo: true,
        },
      ],
    }
  },
  created() {
    // setTimeout(this.goToVideo, 10000)
  },
  methods: {
    // goToVideo() {
    //   this.imageView = false
    //   this.videoView = true
    //   setTimeout(this.goToImage, 20000)
    // },
    // goToImage() {
    //   this.imageView = true
    //   this.videoView = false
    //   setTimeout(this.goToVideo, 10000)
    // },
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
