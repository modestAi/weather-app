export interface WeatherReport {
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

export interface ResponseCoordinates {
  latitude: number;
  longitude: number;
}
