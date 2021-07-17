import React from "react";
import SkeletonLoader from "../../../SkeletonLoader/SkeletonLoader";

import { FlexDiv, NoWrapDiv, RawFlexDiv } from "./SmallCard.style";

const SmallCardSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <FlexDiv>
      <RawFlexDiv>
        <SkeletonLoader height={"1rem"} width={"3rem"} marginBottom={"0.7rem"} />
        <div>
          <SkeletonLoader height={"2rem"} width={"2rem"} isCircle={true} marginBottom={"0.5rem"} />
        </div>
      </RawFlexDiv>
      <NoWrapDiv>
        <div>
          <SkeletonLoader height={"1rem"} width={"3rem"} />
        </div>
      </NoWrapDiv>
    </FlexDiv>
  );
};

export default SmallCardSkeletonLoader;
