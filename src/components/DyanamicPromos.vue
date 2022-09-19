<template>
  <v-card @click="goToDyanmic()" class="mx-auto" max-width="344" height="150">
    <v-layout align-center justify-center fill-height class="title">
      <p>Videos</p>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    goToDyanmic() {
      this.$router.push('/dynamicPromos')
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
