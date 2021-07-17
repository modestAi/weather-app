"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullResponse = void 0;
var string_1 = require("./string");
var getFullResponse = function (weatherResponse) {
    var weeklyArray = parseWeekly(weatherResponse.data.daily);
    var location = parseLocation(weatherResponse.data);
    var currentDayData = parseCurrent(weatherResponse.data.current, weeklyArray);
    weeklyArray[0] = currentDayData;
    var res = { location: location, weeklyArray: weeklyArray };
    return res;
};
exports.getFullResponse = getFullResponse;
var parseCurrent = function (current, weeklyData) {
    return {
        requestTime: current.dt,
        feelsLike: weeklyData[0].feelsLike,
        humidity: current.humidity,
        windSpeed: current.wind_speed,
        temperature: current.temp,
        image: "http://openweathermap.org/img/w/" + current.weather[0].icon + ".png",
        description: string_1.getCapitalizedString(current.weather[0].description),
        maxTemp: weeklyData[0].maxTemp,
        minTemp: weeklyData[0].minTemp,
    };
};
var parseWeekly = function (weeklyData) {
    return weeklyData.map(function (val) {
        return {
            requestTime: val.dt,
            feelsLike: val.feels_like.day,
            humidity: val.humidity,
            windSpeed: val.wind_speed,
            temperature: val.temp.max,
            image: "http://openweathermap.org/img/w/" + val.weather[0].icon + ".png",
            description: string_1.getCapitalizedString(val.weather[0].description),
            maxTemp: val.temp.max,
            minTemp: val.temp.min,
        };
    });
};
var parseLocation = function (geoData) {
    return {
        latitude: geoData.lat,
        longitude: geoData.lon,
    };
};
