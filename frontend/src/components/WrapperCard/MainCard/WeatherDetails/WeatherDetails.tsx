import React, { useContext } from "react";
import { usePreferred } from "../../../../hooks/usePreferred";
import { toFahrenheit } from "../../../../utils/unitConverters/temperatureConverter";
import { SkeletonLoaderContext } from "./../../WrapperCard";
import MeteorologicalData from "./MeteorologicalData/index";
import { FlexDiv, InlineImg, InlinePara, TransparentButton } from "./WeatherDetails.style";
import WeatherDetailsSkeletonLoader from "./WeatherDetailsSkeletonLoader";

interface WeatherDetailsProps {
  data: {
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    image: string;
    temperature: number;
  };
}

const WeatherDetails: React.FC<WeatherDetailsProps> = (props): JSX.Element => {
  const meteorologicalData = {
    feelsLike: props.data.feelsLike,
    humidity: props.data.humidity,
    windSpeed: props.data.windSpeed,
  };

  const shouldShimmer = useContext(SkeletonLoaderContext);

  const temperature = props.data.temperature;

  const { preferredUnit, setPreferredUnit } = usePreferred();

  const setToMetric = () => {
    if (preferredUnit !== "metric") {
      setPreferredUnit("metric");
    }
  };

  const setToImperial = () => {
    if (preferredUnit !== "imperial") {
      setPreferredUnit("imperial");
    }
  };
  if (!shouldShimmer) {
    return (
      <FlexDiv>
        <div>
          <FlexDiv>
            <div>
              <InlineImg src={props.data.image} alt="None" />
            </div>
            <div>
              <InlinePara>
                {preferredUnit === "metric" ? Math.trunc(temperature) : Math.trunc(toFahrenheit(temperature))}
              </InlinePara>
            </div>
            <div>
              <TransparentButton onClick={setToMetric} isSelected={preferredUnit === "metric"}>
                °C
              </TransparentButton>
              <span>|</span>
              <TransparentButton onClick={setToImperial} isSelected={preferredUnit === "imperial"}>
                °F
              </TransparentButton>
            </div>
          </FlexDiv>
        </div>
        <div>
          <MeteorologicalData meteorologicalData={meteorologicalData}></MeteorologicalData>
        </div>
      </FlexDiv>
    );
  } else {
    return <WeatherDetailsSkeletonLoader />;
  }
};

export default WeatherDetails;
