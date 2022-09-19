import parser from 'xml-js'
// import axios from "axios";

export default {
  async getFlights() {
    let result
    let flights

    try {
      result = require('../data/apidata')
      // result = await axios.get(
      //   "http://10.70.124.15:8080/BIAL_FIDS/validatePlayer.htm?username=scala&password=scala"
      // );
      // console.log("result: ", result);
      const parsedJson = parser.xml2js(result.data, {
        compact: true,
        textKey: '_',
      })

      var time = new Date(
        parsedJson.flight_info.updated_on.time._.split(' IST ').join(' ')
      )
      flights = parsedJson.flight_info.flight.filter(
        (f) => f.type._ === 'Departure'
      )
    } catch (error) {
      console.log('************************************')
      console.log(error)
    }
    return { airportData: flights, time }
  },
}
