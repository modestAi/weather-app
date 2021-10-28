import React from "react";
import SkeletonLoader from "../../../../SkeletonLoader/SkeletonLoader";
import { StyledDiv } from "./MeteorologicalData.style";

const MeteorologicalDataSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <div>
      <StyledDiv>
        <SkeletonLoader height={"0.7rem"} width={"7rem"} marginBottom={"0.3rem"} marginTop={"0.3rem"} />
        <SkeletonLoader height={"0.7rem"} width={"7rem"} marginBottom={"0.3rem"} />
        <SkeletonLoader height={"0.7rem"} width={"7rem"} marginBottom={"0.3rem"} />
      </StyledDiv>
    </div>
  );
};

export default MeteorologicalDataSkeletonLoader;
