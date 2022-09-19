<template>
  <v-row class="pl-8 pt-2">
    <v-dialog v-model="dialog" persistent max-width="340">
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded color="primary" dark v-bind="attrs" v-on="on">
          {{ buttonText }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Do you really want to awail {{ serviceTitle }} services ?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="onClickCancel(), (dialog = false)">
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="onClickYes(), (dialog = false)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    buttonText: String,
    serviceTitle: String,
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    onClickYes() {
      this.$toasted.success('Your Service is on the way')
    },
    onClickCancel() {
      this.$toasted.show('Canceled')
    },
  },
}
</script>
