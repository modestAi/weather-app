import React, { useContext } from "react";
import { SkeletonLoaderContext } from "../../WrapperCard";
import { StyledDivChild, StyledDivParent } from "./LocationAndDetails.style";
import LocationAndDetailsSkeletonLoader from "./LocationAndDetailsSkeletonLoader";

interface LocationAndDetailsProps {
  locationAndDetails: {
    description: string;
    day: string;
    address: string;
    time: string;
  };
}

const LocationAndDetails: React.FC<LocationAndDetailsProps> = (props): JSX.Element => {
  const shouldShimmer = useContext(SkeletonLoaderContext);
  if (!shouldShimmer) {
    return (
      <StyledDivParent>
        <StyledDivChild>{props.locationAndDetails.address}</StyledDivChild>
        <StyledDivChild>
          {props.locationAndDetails.day}, {props.locationAndDetails.time}
        </StyledDivChild>
        <StyledDivChild>{props.locationAndDetails.description}</StyledDivChild>
      </StyledDivParent>
    );
  } else {
    return <LocationAndDetailsSkeletonLoader />;
  }
};

export default LocationAndDetails;
