import SkeletonLoader from "../../../SkeletonLoader/SkeletonLoader";
import { FlexEndDiv, StyledUl } from "./LocationAndDetails.style";

const LocationAndDetailsSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <StyledUl>
      <FlexEndDiv>
        <SkeletonLoader height={"0.7rem"} width={"8rem"} marginBottom={"0.3rem"} />
        <SkeletonLoader height={"0.7rem"} width={"7rem"} marginBottom={"0.3rem"} />
        <SkeletonLoader height={"0.7rem"} width={"6rem"} marginBottom={"0.3rem"} />
      </FlexEndDiv>
    </StyledUl>
  );
};

export default LocationAndDetailsSkeletonLoader;
