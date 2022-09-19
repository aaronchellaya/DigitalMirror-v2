<template>
  <v-card
    @click="goToInteractive()"
    class="mx-auto"
    max-width="344"
    height="150"
  >
    <v-layout align-center justify-center fill-height class="title">
      <p>Interactive</p>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    goToInteractive() {
      this.$router.push('/interactive')
    },
  },
}
</script>

<style>
p {
  font-size: xx-large;
  color: black;
  font-weight: bold;
}
</style>
