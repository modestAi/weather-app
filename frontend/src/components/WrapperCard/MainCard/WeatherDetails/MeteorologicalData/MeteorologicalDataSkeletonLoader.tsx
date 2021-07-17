import React from "react";
import SkeletonLoader from "../../../../SkeletonLoader/SkeletonLoader";
import { StyledUl } from "./MeteorologicalData.style";

const MeteorologicalDataSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <div>
      <StyledUl>
        <SkeletonLoader height={"0.7rem"} width={"4rem"} marginBottom={"0.3rem"} marginTop={"0.3rem"} />
        <SkeletonLoader height={"0.7rem"} width={"4rem"} marginBottom={"0.3rem"} />
        <SkeletonLoader height={"0.7rem"} width={"4rem"} marginBottom={"0.3rem"} />
      </StyledUl>
    </div>
  );
};

export default MeteorologicalDataSkeletonLoader;
