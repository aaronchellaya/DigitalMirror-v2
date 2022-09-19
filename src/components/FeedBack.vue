<template>
  <v-card @click="goToFeedBack()" class="mx-auto" max-width="344" height="150">
    <v-layout align-center justify-center fill-height class="title">
      <p>Feedback</p>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    goToFeedBack() {
      this.$router.push('/feedBack')
    },
  },
}
</script>

<style>
h1 {
  text-align: center;
  padding-top: 60px;
}
</style>
