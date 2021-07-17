export interface CurrentWeather {
  dt: number;
  feelsLike: number;
  temp: number;
  humidity: number;
  wind_speed: number;
  maxTemp: number;
  minTemp: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
}

export interface WeeklyWeather {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  feels_like: {
    day: number;
  };
  humidity: number;
  wind_speed: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface Coordinates {
  lat: number;
  lon: number;
}
