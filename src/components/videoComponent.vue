<template>
  <md-card>
    <md-card-media>
      <div class="item">
        <div class="player">
          <video-player
            class="vjs-custom-skin"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
            @ready="playerReadied"
          >
          </video-player>
        </div>
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
import '../custom-theme.css'
export default {
  data() {
    return {
      playerOptions: {
        height: '360',
        autoplay: true,
        muted: true,
        language: 'en',
        sources: [
          {
            type: 'video/mp4',
            src: 'videos/mmt.mp4',
          },
        ],
      },
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('dynamic change options', this.player)
      this.player.muted(false)
    }, 5000)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
  },
  methods: {
    playerReadied(player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      // player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    },
  },
}
</script>
