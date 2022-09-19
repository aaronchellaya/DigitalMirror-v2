<template>
  <div class="white--text text-xs-center">
    <p class="display-3">{{greet}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greet: '',
      loadingGreet: '',
    };
  },
  methods: {
    loadGreet() {
      const { greet } = this;
      greet.split('').forEach((char, i) => {
        setTimeout(() => {
          this.loadingGreet += char;
        }, i * 150);
      });
    },
    minuteToMiliseconds(hour)  {
      return 1000*60*60*hour;
    },
    setNextGreet(afterMinutes) {
      setTimeout(this.setNextGreet, this.minuteToMiliseconds(afterMinutes));
    },
    setGreetMsg() {
      const now = new Date();
      const currentHour = now.getHours();
      // const currentMinutes = now.getMinutes();
      const isMorning = currentHour < 12;
      const isAfternoon = currentHour >= 12 && currentHour < 16;

      if (isMorning) {
        this.greet = "Good morning!";
        // const timeToAfternoon = (12 - currentHour) * 60 - currentMinutes; // In minutes 
        // this.setNextGreet(timeToAfternoon);
      } else if (isAfternoon) {
        this.greet = "Good afternoon!"
        // const timeToEvening = (16 - currentHour) * 60 - currentMinutes; // In minutes
        // this.setNextGreet(timeToEvening);
      } else {
        this.greet = "Good evening!";
        // const timeToMorning = (24 - currentHour) * 60 - currentMinutes; // In minutes
        // this.setNextGreet(timeToMorning);
      }
    }
  },
  mounted() {
    this.setGreetMsg();
    setInterval(this.setGreetMsg, 60 * 1000);
  },
};
</script>

<style>
</style>
