<template>
  <v-card @click="goToStatic()" class="mx-auto" max-width="344" height="150">
    <v-layout align-center justify-center fill-height class="title">
      <p>Promos</p>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    goToStatic() {
      this.$router.push('/staticPromos')
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
