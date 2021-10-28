import React from "react";
import SkeletonLoader from "../../../SkeletonLoader/SkeletonLoader";
import MeteorologicalDataSkeletonLoader from "./MeteorologicalData/MeteorologicalDataSkeletonLoader";
import { FlexDiv, TempPara } from "./WeatherDetails.style";

const WeatherDetailsSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <FlexDiv>
      <div>
        <FlexDiv>
          <div>
            <SkeletonLoader height={"2.5rem"} width={"2.5rem"} isCircle={true} />
          </div>
          <div>
            <SkeletonLoader height={"2.5rem"} width={"3rem"} />
          </div>
          <FlexDiv>
            <SkeletonLoader height={"1.5rem"} width={"3rem"} borderRadius={"2px"} />
            <SkeletonLoader height={"1.5rem"} width={"3rem"} borderRadius={"2px"} />
          </FlexDiv>
        </FlexDiv>
      </div>
      <div>
        <MeteorologicalDataSkeletonLoader />
      </div>
    </FlexDiv>
  );
};

export default WeatherDetailsSkeletonLoader;
