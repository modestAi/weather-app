interface Properties {
  requestTime: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  temperature: number;
  image: string;
  description: string;
  maxTemp: number;
  minTemp: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface DataModel {
  latitude: number;
  longitude: number;
  day: string;
  time: string;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  temperature: number;
  image: string;
  description: string;
  maxTemp: number;
  minTemp: number;
}

export const getData = (apiResponseProperties: Properties[], location: Coordinates): DataModel[] => {
  return apiResponseProperties.map((val) => {
    return {
      latitude: location.latitude,
      longitude: location.latitude,
      day: getDay(val.requestTime),
      time: getTime(val.requestTime),
      feelsLike: val.feelsLike,
      humidity: val.humidity,
      windSpeed: val.windSpeed,
      temperature: val.temperature,
      image: val.image,
      description: val.description,
      maxTemp: val.maxTemp,
      minTemp: val.minTemp,
    };
  });
};

const getDay = (req: number) => {
  return new Date(req * 1000).toLocaleString("en-us", { weekday: "long" });
};

const getTime = (req: number) => {
  return new Date(req * 1000).toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" });
};
