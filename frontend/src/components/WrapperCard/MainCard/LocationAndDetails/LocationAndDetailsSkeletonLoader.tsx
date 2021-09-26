import SkeletonLoader from "../../../SkeletonLoader/SkeletonLoader";
import { FlexEndDiv, StyledDivParent } from "./LocationAndDetails.style";

const LocationAndDetailsSkeletonLoader: React.FC = (): JSX.Element => {
  return (
    <StyledDivParent>
      <FlexEndDiv>
        <SkeletonLoader height={"0.7rem"} width={"12rem"} marginBottom={"0.2rem"} />
        <SkeletonLoader height={"0.7rem"} width={"8rem"} marginBottom={"0.2rem"} />
        <SkeletonLoader height={"0.7rem"} width={"5rem"} marginBottom={"0.2rem"} />
      </FlexEndDiv>
    </StyledDivParent>
  );
};

export default LocationAndDetailsSkeletonLoader;
