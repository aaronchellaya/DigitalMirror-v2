<template>
  <v-layout justify-center>
    <v-flex shrink v-if="localAddress">
      <v-layout column align-center>
        <v-flex>
          <qrcode
            :value="localAddress"
            :options="{ width: 500, color: {dark: '#000000', light: '#ffffff' }}"
            light
          ></qrcode>
        </v-flex>
        <v-flex>
          <p
            class="white--text display-1"
          >To connect with mirror, open Smart Mirror app and click on scan button.</p>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      localAddress: ""
    };
  },

  methods: {
    storeLocalAddress() {
      this.localAddress = this.$store.state.settings.ipAddr;
    },

    attachSocketListeners() {
      this.$io.on("userLoggedIn", todoList => {
        this.$store.dispatch("setTodoList", todoList);
        this.$router.push("/hotel/dashboard");
      });
    }
  },
  async beforeMount() {
    this.attachSocketListeners();
    this.storeLocalAddress();
  }
};
</script>

<style>
</style>
