<template>
  <footer v-if="this.$store.state.toggleNotification == true">
    <marquee class="pt-2">
      <p class="display-1">Welcome to the Notification pannel</p>
    </marquee>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.display-1 {
  color: white;
}
</style>
