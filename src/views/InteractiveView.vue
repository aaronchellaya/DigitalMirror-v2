<template>
  <div>
    <v-row>
      <DigitalClock />
      <v-layout align-center class="home">
        <v-icon @click="goToHome()" color="white" x-large>mdi-home</v-icon>
      </v-layout>
      <div class="weather-wrap">
        <v-layout justify-center align-center fill-height>
          <weather-info />
        </v-layout>
      </div>
    </v-row>
    <v-layout justify-center>
      <v-card height="500" width="1000">
        <v-card-text>
          <p align="center" class="text-h3 text--primary">
            {{ typeValue }}
          </p>
          <br />
          <transition name="slide-fade">
            <div v-if="divContent == true">
              <div v-if="mainContent == true">
                <p align="center" class="text-h4 text--primary">
                  What can I do for You ?
                </p>
                <p align="center" class="text-h5 text--primary pl-4">
                  We have services like:
                </p>
                <v-row>
                  <v-col cols="6">
                    <v-card
                      @click="goToHotel(), (mainContent = false)"
                      class="mx-auto"
                      max-width="450"
                      height="280"
                    >
                      <v-img
                        height="230px"
                        src="..\public\industry\images\lunch2.jpg"
                      >
                      </v-img>
                      <h2>HOTEL SERVICES</h2>
                    </v-card>
                  </v-col>

                  <v-card
                    @click="goToLaundry(), (mainContent = false)"
                    class="mx-auto"
                    max-width="450"
                    height="280"
                  >
                    <v-img
                      height="230px"
                      src="..\public\industry\images\laundry2.jpg"
                    >
                    </v-img>
                    <h2>LAUNDRY SERVICES</h2>
                  </v-card>
                </v-row>
              </div>

              <div v-if="hotelContent == true">
                <p align="center" class="text-h5 text--primary pl-4">
                  <v-icon
                    @click="goToMain(), (hotelContent = false)"
                    dark
                    left
                    color="black"
                  >
                    mdi-arrow-left
                  </v-icon>
                  In which time you want the service?
                </p>
                <v-row class="pt-16">
                  <v-col>
                    <v-card
                      @click="goToDialog(1), (dialog = !dialog)"
                      color="#89B5AF"
                      align-center
                      justify-center
                      fill-height
                      class="title ml-15"
                      max-width="200"
                    >
                      <h1 class="pa-5">1 : 00 PM</h1>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card
                      @click="goToDialog(4), (dialog = !dialog)"
                      color="#89B5AF "
                      align-center
                      justify-center
                      fill-height
                      class="title ml-15"
                      max-width="200"
                    >
                      <h1 class="pa-5">4 : 00 PM</h1>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card
                      @click="goToDialog(6), (dialog = !dialog)"
                      color="#89B5AF "
                      align-center
                      justify-center
                      fill-height
                      class="title ml-15"
                      max-width="200"
                      ><h1 class="pa-5">6 : 00 PM</h1>
                    </v-card>
                  </v-col>
                </v-row>

                <v-dialog v-model="dialog" max-width="450px">
                  <v-card>
                    <v-card-title class="text-h5">
                      Do you really want to awail

                      {{ time }}pm {{ serviceTitle }}services ?
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="red"
                        text
                        @click="
                          onClickCancel(),
                            (dialog = false)((hotelContent = false))
                        "
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="
                          onClickYes(), (dialog = false)((hotelContent = false))
                        "
                      >
                        Yes
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
              <div v-if="laundryContent == true">
                <p align="center" class="text-h5 text--primary pl-4">
                  <v-icon
                    @click="goToMain(), (laundryContent = false)"
                    dark
                    left
                    color="black"
                  >
                    mdi-arrow-left
                  </v-icon>
                  We provide services like?
                </p>
                <v-card-text>
                  <v-row class="pt-16">
                    <v-col>
                      <v-card
                        @click="goToButton('dry cleaning'), (dialog = !dialog)"
                        class="mx-auto"
                        max-width="300"
                        height="200"
                      >
                        <v-img
                          height="150px"
                          src="..\public\industry\images\dry.jpg"
                        >
                        </v-img>
                        <h2>Dry cleaning</h2>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        @click="
                          goToButton('Stain treatement'), (dialog = !dialog)
                        "
                        class="mx-auto"
                        max-width="300"
                        height="200"
                      >
                        <v-img
                          height="150px"
                          src="..\public\industry\images\stain.jpg"
                        >
                        </v-img>
                        <h2>Stain treatement</h2>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        @click="goToButton('Steam ironing'), (dialog = !dialog)"
                        class="mx-auto"
                        max-width="300"
                        height="200"
                      >
                        <v-img
                          height="150px"
                          src="..\public\industry\images\steam.jpg"
                        >
                        </v-img>
                        <h2>Steam ironing</h2>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-dialog v-model="dialog" max-width="470px">
                  <v-card>
                    <v-card-title class="text-h5">
                      Do you really want to awail {{ service }}
                      {{ serviceTitle1 }}services ?
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="red"
                        text
                        @click="
                          onClickCancel(),
                            (dialog = false)((laundryContent = false))
                        "
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="
                          onClickYes(),
                            (dialog = false)((laundryContent = false))
                        "
                      >
                        Yes
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </div>
          </transition>
        </v-card-text>
      </v-card>
    </v-layout>
    <footer-component />
  </div>
</template>

<script>
import DigitalClock from "@/components/DigitalClock.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";
import FooterComponent from "@/components/FooterComponent.vue";

//import DialogComponent from "@/components/DialogComponent.vue";
export default {
  data() {
    return {
      divContent: false,
      mainContent: false,
      hotelContent: false,
      laundryContent: false,
      dialog: false,
      time: null,
      service: "",
      serviceTitle: "hotel ",
      serviceTitle1: "laundry ",

      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Hi! Welcome to DigitaL Mirror"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      divDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText);
    setTimeout(this.goToDiv, this.divDelay + 1500);
    setTimeout(this.goToMain, this.divDelay + 1500);
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToDiv() {
      this.divContent = true;
    },
    goToMain() {
      this.mainContent = true;
    },
    goToHotel() {
      this.hotelContent = true;
    },
    goToLaundry() {
      this.laundryContent = true;
    },
    goToDialog(time) {
      this.time = time;
    },

    goToButton(service) {
      this.service = service;
    },

    onClickYes() {
      this.$toasted.success("Your Service is on the way");
    },
    onClickCancel() {
      this.$toasted.show("Canceled");
    },
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
    },
  },

  components: { DigitalClock, WeatherInfo, FooterComponent },
};
</script>

<style lang="scss" scoped>
.home {
  padding-left: 40px;
}

div {
  text-align: center;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 5 px;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  margin: 5px;
  ext-align: center;
}

.v-dialog > .v-card > .v-card__title {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  padding: 15px;
}

.v-btn:not(.v-btn--round).v-size--default[data-v-4c2e2c46] {
  height: 36px;
  min-width: 96px;

  width: 180px;
}

* {
  padding: 3px;
}

.v-btn {
  float: left;
}

.v-card__title[data-v-4c2e2c46] {
  float: left;
  margin-top: 17px;
  margin-left: 0px;
  font-weight: 700;
}

.v-application .primary {
  background-color: black !important;
}

.theme--light.v-image {
  color: white;
}
p {
  font-size: xx-large;
  color: currentcolor;
  font-weight: bold;
}
h2 {
  padding-top: 15px;
}
</style>
