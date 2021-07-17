import React, { useContext } from "react";
import { SkeletonLoaderContext } from "../../WrapperCard";
import { StyledUl } from "./LocationAndDetails.style";
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
      <StyledUl>
        <li>{props.locationAndDetails.address}</li>
        <li>
          {props.locationAndDetails.day}, {props.locationAndDetails.time}
        </li>
        <li>{props.locationAndDetails.description}</li>
      </StyledUl>
    );
  } else {
    return <LocationAndDetailsSkeletonLoader />;
  }
};

export default LocationAndDetails;
