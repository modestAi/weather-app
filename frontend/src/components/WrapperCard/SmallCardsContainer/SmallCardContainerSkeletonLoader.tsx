import React from "react";
import { StyledDiv } from "./SmallCardContainer.style";
import SmallCardSkeletonLoader from "./SmallCards/SmallCardSkeletonLoader";

const SmallCardContainerSkeletonLoader: React.FC = (): JSX.Element => {
  const n = 8;
  return (
    <StyledDiv>
      {[...Array(n)].map((e, i) => (
        <SmallCardSkeletonLoader key={i} />
      ))}
    </StyledDiv>
  );
};

export default SmallCardContainerSkeletonLoader;
