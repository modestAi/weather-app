import React from "react";
import SkeletonLoader from "../../../SkeletonLoader/SkeletonLoader";
import MeteorologicalDataSkeletonLoader from "./MeteorologicalData/MeteorologicalDataSkeletonLoader";
import { FlexDiv, InlinePara } from "./WeatherDetails.style";

const WeatherDetailsSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <FlexDiv>
      <div>
        <FlexDiv>
          <div>
            <SkeletonLoader height={"2rem"} width={"2rem"} isCircle={true} />
          </div>
          <div>
            <InlinePara>
              <SkeletonLoader height={"1.5rem"} width={"3rem"} />
            </InlinePara>
          </div>
          <div>
            <SkeletonLoader height={"2rem"} width={"4rem"} borderRadius={"2px"} />
          </div>
        </FlexDiv>
      </div>
      <div>
        <MeteorologicalDataSkeletonLoader></MeteorologicalDataSkeletonLoader>
      </div>
    </FlexDiv>
  );
};

export default WeatherDetailsSkeletonLoader;
