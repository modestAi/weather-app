import React from "react";
import LocationAndDetailsSkeletonLoader from "./LocationAndDetails/LocationAndDetailsSkeletonLoader";
import { FlexDiv } from "./MainCard.style";
import WeatherDetailsSkeletonLoader from "./WeatherDetails/WeatherDetailsSkeletonLoader";

const MainCardSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <FlexDiv>
      <WeatherDetailsSkeletonLoader />
      <LocationAndDetailsSkeletonLoader />{" "}
    </FlexDiv>
  );
};

export default MainCardSkeletonLoader;
