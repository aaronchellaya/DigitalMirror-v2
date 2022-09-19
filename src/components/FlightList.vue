<template>
  <v-layout>
    <v-flex shrink>
      <v-simple-table class="flightTable tableWrapper">
        <template v-slot:default>
          <thead>
            <tr>
              <th colspan="7" class="yellow black--text text-center title">
                Departure
              </th>
            </tr>
            <tr>
              <th class="white black-text text-center subtitle-2">STD</th>
              <th class="white black-text text-center subtitle-2">ETD</th>
              <th class="white black-text text-center subtitle-2">Flight No</th>
              <th class="white black-text text-center subtitle-2">Dest</th>
              <th class="white black-text text-center subtitle-2">Status</th>
              <th class="white black-text text-center subtitle-2">Gate</th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr
              v-for="(item, index) in allFlights"
              :key="index"
              class="my2"
              align-content="center"
            >
              <!-- <td>
              </td>-->
              <td class="white--text text-center title pa-2">
                {{ item.st._ }}
              </td>
              <td class="white--text text-center title pa-2">
                {{ item.et._ ? item.et._ : '-' }}
              </td>
              <td class="pr-0">
                <img
                  :src="getAirlineLogo(item)"
                  min-width="90"
                  width="70"
                  height="30"
                  :contain="true"
                />
                <span class="white--text text-center title pl-2">{{
                  item.fltno._
                }}</span>
              </td>
              <td class="white--text text-center title pa-0">
                {{ item.location._ }}
              </td>
              <td
                class="white--text text-center title pl-0"
                :class="getStatusClass(item)"
              >
                {{ item.status._ ? item.status._ : '-' }}
              </td>
              <td class="white--text text-center title pa-2">
                {{ item.gates._ }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['allFlights'],

  data: () => ({
    flights: {},
  }),

  methods: {
    getAirlineLogo(flight) {
      let logo = `images/FIDS_logos/${flight.fltno._.split(' ')[0]}_S.gif`
      return logo
    },
    getStatusClass(flight) {
      const classObject = {}
      switch (flight.status._) {
        case 'Boarding':
          classObject['green--text'] = true
          break
        case 'Final Call':
        case 'Gate Closed':
        case 'Delayed':
          classObject['red--text'] = true
          break
        case 'Security':
          classObject['yellow--text'] = true
          break
        default:
          classObject['white--text'] = true
          break
      }
      return classObject
    },
  },

  created() {
    this.flights = this.allFlights
    setInterval(() => {
      const firstFlight = this.flights.shift()
      this.flights.push(firstFlight)
    }, 3000)
  },
}
</script>

<style scoped>
.flightTable {
  background-color: black !important;
  color: white !important;
}
.tableWrapper {
  height: 575px;
  overflow-y: hidden;
}
</style>
