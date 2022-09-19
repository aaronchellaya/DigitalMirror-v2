<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <video-player />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1">
        <v-avatar size="60" color="white" @click="() => this.$router.push('/')">
          <v-icon size="30" color="black">fas fa-arrow-left</v-icon>
        </v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import videoPlayer from '../components/videoComponent.vue'
export default {
  components: {
    videoPlayer,
  },
}
</script>

<style></style>
