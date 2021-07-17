import { AxiosResponse } from "axios";
import { WeatherReport } from "../interfaceModels/ResponseModelsInterfaces";
import { CurrentWeather, WeeklyWeather } from "../interfaceModels/WeatherInterfaces";
import { getCapitalizedString } from "./string";
import { Coordinates } from "../interfaceModels/WeatherInterfaces";
import { ResponseCoordinates } from "../interfaceModels/ResponseModelsInterfaces";
export const getFullResponse = (
  weatherResponse: AxiosResponse<any>
): { location: ResponseCoordinates; weeklyArray: WeatherReport[] } => {
  const weeklyArray: WeatherReport[] = parseWeekly(weatherResponse.data.daily);
  const location: ResponseCoordinates = parseLocation(weatherResponse.data);
  const currentDayData: WeatherReport = parseCurrent(weatherResponse.data.current, weeklyArray);
  weeklyArray[0] = currentDayData;
  const res = { location, weeklyArray };
  return res;
};

const parseCurrent = (current: CurrentWeather, weeklyData: WeatherReport[]): WeatherReport => {
  return {
    requestTime: current.dt,
    feelsLike: weeklyData[0].feelsLike,
    humidity: current.humidity,
    windSpeed: current.wind_speed,
    temperature: current.temp,
    image: `http://openweathermap.org/img/w/${current.weather[0].icon}.png`,
    description: getCapitalizedString(current.weather[0].description),
    maxTemp: weeklyData[0].maxTemp,
    minTemp: weeklyData[0].minTemp,
  };
};

const parseWeekly = (weeklyData: WeeklyWeather[]): WeatherReport[] => {
  return weeklyData.map((val) => {
    return {
      requestTime: val.dt,
      feelsLike: val.feels_like.day,
      humidity: val.humidity,
      windSpeed: val.wind_speed,
      temperature: val.temp.max,
      image: `http://openweathermap.org/img/w/${val.weather[0].icon}.png`,
      description: getCapitalizedString(val.weather[0].description),
      maxTemp: val.temp.max,
      minTemp: val.temp.min,
    };
  });
};

const parseLocation = (geoData: Coordinates): ResponseCoordinates => {
  return {
    latitude: geoData.lat,
    longitude: geoData.lon,
  };
};
