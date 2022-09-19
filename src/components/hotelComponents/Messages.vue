<template>
  <v-layout>
    <v-flex>
      <v-toolbar color="black" class="white--text inbox-header">
        <v-toolbar-title class="display-1">
          <v-icon color="white" medium left>fas fa-inbox</v-icon>Messages
        </v-toolbar-title>
      </v-toolbar>
      <v-list two-line class="black white--text">
        <template v-for="(msg, index) in messagesList">
          <div :key="index" class="my-2 title">{{msg}}</div>
          <v-divider dark :key="index" class="my-1"></v-divider>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import userAPI from "../../api/userAPI.js";
export default {
  data() {
    return {
      messagesList: [
        "Set a goal that makes you want to jump out of bed in the morning.",
        "The key to success is to focus on goals, not obstacles.",
        "Your limitation — it’s only your imagination.",
        "Dream it. Believe it. Build it."
      ]
    };
  },

  methods: {
    async fetchAndStoreEmails() {
      this.emails = await userAPI.getEmailList(5);
      setTimeout(this.fetchAndStoreEmails, 1000 * 60 * 5);
    }
  },

  async mounted() {
    // this.fetchAndStoreEmails();
  }
};
</script>

<style scoped>
.inbox-header {
  border-bottom: 2px solid white !important;
  padding: 5px 0;
  margin: 5px 0;
}
.loader {
  text-align: center;
  margin-top: 100px;
}
</style>
