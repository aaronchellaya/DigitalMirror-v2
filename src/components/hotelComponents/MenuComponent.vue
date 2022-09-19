<template>
  <v-layout column>
    <v-flex class="header">
      <span class="display-1">Today's Menu</span>
    </v-flex>
    <v-flex mt-2>
      <v-layout column>
        <v-flex mt-1>
          <v-layout column>
            <v-flex class="courseHeader" px-3>
              <v-layout align-center>
                <v-flex shrink mr-3>
                  <v-icon color="white">fa fa-coffee</v-icon>
                </v-flex>
                <v-flex>
                  <span class="headline">Breakfast</span>
                </v-flex>
                <v-flex text-right>8:30 AM - 9:30 AM</v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-list class="black white--text">
                <v-list-item
                  color="blue"
                  v-for="item in breakfastItems"
                  :key="item.title"
                  style="padding:-5px !important;"
                >
                  <v-list-item-action>
                    <v-icon size="15" color="white">fas fa-circle</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class="white--text" v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex mt-1>
          <v-layout column>
            <v-flex class="courseHeader" px-3>
              <v-layout align-center>
                <v-flex shrink mr-4 ml-1>
                  <v-icon color="white">fas fa-utensils</v-icon>
                </v-flex>
                <v-flex>
                  <span class="headline">Lunch</span>
                </v-flex>
                <v-flex text-right>12:30 PM - 2:00 PM</v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-list class="black white--text">
                <v-list-item color="blue" v-for="item in lunchItems" :key="item.title">
                  <v-list-item-action>
                    <v-icon size="15" color="white">fas fa-circle</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class="white--text" v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex mt-2>
          <v-layout column>
            <v-flex class="courseHeader" px-3>
              <v-layout align-center>
                <v-flex shrink mr-4 ml-1>
                  <v-icon color="white">fas fa-utensils</v-icon>
                </v-flex>
                <v-flex>
                  <span class="headline">Dinner</span>
                </v-flex>
                <v-flex text-right>
                  7:00 PM - 9:00 PM
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-list class="black white--text">
                <v-list-item color="blue" v-for="item in dinnerItems" :key="item.title">
                  <v-list-item-action>
                    <v-icon size="15" color="white">fas fa-circle</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class="white--text" v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      breakfastItems: [
        {
          title: "Sandwich"
        },
        {
          title: "French Toast"
        }
      ],
      lunchItems: [
        {
          title: "Rajma Rice"
        },
        {
          title: "Cabbage Masala"
        }
      ],
      dinnerItems: [
        {
          title: "Panneer Tika"
        },
        {
          title: "Dal Makhni"
        }
      ]
    };
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
.header {
  border-bottom: 2px solid white !important;
  color: white;
  padding: 10px 20px;
}
.courseHeader {
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 10px 20px;
}
</style>