import React from "react";
import LocationAndDetails from "./LocationAndDetails/LocationAndDetailsSkeletonLoader";
import { FlexDiv } from "./MainCard.style";
import WeatherDetailsSkeletonLoader from "./WeatherDetails/WeatherDetailsSkeletonLoader";

const MainCardSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <FlexDiv>
      <div>
        <WeatherDetailsSkeletonLoader />
      </div>
      <div>
        <LocationAndDetails />{" "}
      </div>
    </FlexDiv>
  );
};

export default MainCardSkeletonLoader;
