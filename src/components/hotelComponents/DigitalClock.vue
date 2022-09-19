<template>
  <div class="white--text">
    <p class="display-3">{{time}}</p>
    <p class="display-1 mb-0">{{day}}</p>
    <p class="display-1">{{month}} {{date}}</p>
  </div>
</template>

<script>
const dayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thrusday',
  'Friday',
  'Saturday',
];
export default {
  data() {
    return {
      day: '',
      month: '',
      date: '',
      time: '',
      fullDate: '',
    };
  },
  methods: {
    timeConvert(time) {
      const timeArr = time.split(':');
      const m = timeArr[1];
      let h = timeArr[0];
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      return `${h}:${m} ${ampm}`;
    },
    updateDateAndTime() {
      const now = new Date();
      const dateArray = now
        .toString()
        .split(' ')
        .slice(0, 5);
      this.fullDate = `${dateArray[0]}, ${dateArray[1]} ${dateArray[2]}, ${
        dateArray[3]
      }`;
      this.day = dayOfWeek[now.getUTCDay()];
      [, this.month, this.date] = dateArray;
      this.time = this.timeConvert(dateArray[4]);
    },
  },
  computed: {},
  mounted() {
    this.updateDateAndTime();
    setInterval(this.updateDateAndTime, 60 * 1000);
  },
};
</script>

<style>
</style>
