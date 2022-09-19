import axios from "axios";

const APPID = "9280343670eb45b56b6fcbd7afb66460";
const BANGALORE_CITY_ID = "1277333";
export default {
  async getCurrentWeatherData() {
    let result;
    try {
      result = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            id: BANGALORE_CITY_ID,
            appid: APPID
          }
        }
      );
    } catch (error) {
      // console.log(error);
    }
    return result.data;
  }
};
