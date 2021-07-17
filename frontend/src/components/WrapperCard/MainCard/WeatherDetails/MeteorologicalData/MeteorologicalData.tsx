import React, { useContext } from "react";
import { usePreferred } from "../../../../../hooks/usePreferred";
import { toMilesPerHour } from "../../../../../utils//unitConverters/speedConverter";
import { toFahrenheit } from "../../../../../utils/unitConverters/temperatureConverter";
import { SkeletonLoaderContext } from "../../../WrapperCard";

import { StyledUl } from "./MeteorologicalData.style";
import MeteorologicalDataSkeletonLoader from "./MeteorologicalDataSkeletonLoader";

interface MeteorologicalDataProps {
  meteorologicalData: {
    feelsLike: number;
    humidity: number;
    windSpeed: number;
  };
}

const MeteorologicalData: React.FC<MeteorologicalDataProps> = (props): JSX.Element => {
  const { preferredUnit } = usePreferred();
  const shouldShimmer = useContext(SkeletonLoaderContext);

  let windSpeed = props.meteorologicalData.windSpeed;
  let resultantWindSpeed =
    preferredUnit === "metric" ? Math.trunc(windSpeed) + " mps" : Math.trunc(toMilesPerHour(windSpeed)) + " mph";
  let feelsLike = props.meteorologicalData.feelsLike;
  let resultantFeelsLike =
    preferredUnit === "metric" ? Math.trunc(feelsLike) + "°C" : Math.trunc(toFahrenheit(feelsLike)) + "°F";
  if (!shouldShimmer) {
    return (
      <div>
        <StyledUl>
          <>
            <li>Humidity: {props.meteorologicalData.humidity}%</li>
            <li>Wind Speed: {resultantWindSpeed}</li>
            <li>Feels Like: {resultantFeelsLike}</li>
          </>
        </StyledUl>
      </div>
    );
  } else {
    return <MeteorologicalDataSkeletonLoader />;
  }
};

export default MeteorologicalData;
