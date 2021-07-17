import React from "react";
import LocationAndDetails from "./LocationAndDetails/index";
import { FlexDiv } from "./MainCard.style";
import WeatherDetails from "./WeatherDetails/index";

interface MainCardProps {
  data: {
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    temperature: number;
    image: string;
    maxTemp?: number;
    minTemp?: number;
    description: string;
    latitude: number;
    longitude: number;
    day: string;
    time: string;
  };
}

const MainCard: React.FC<MainCardProps> = ({ data }): JSX.Element => {
  const getLocationAndDetails = () => {
    return {
      description: data.description,
      latitude: data.latitude,
      longitude: data.longitude,
      day: data.day,
      time: data.time,
    };
  };

  return (
    <FlexDiv>
      <div>
        <WeatherDetails data={data} />
      </div>
      <div>
        <LocationAndDetails locationAndDetails={getLocationAndDetails()} />
      </div>
    </FlexDiv>
  );
};

export default MainCard;
