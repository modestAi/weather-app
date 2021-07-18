import React, { useContext } from "react";
import { SkeletonLoaderContext } from "../../WrapperCard";
import {StyledUl } from "./LocationAndDetails.style";
import LocationAndDetailsSkeletonLoader from "./LocationAndDetailsSkeletonLoader";

interface LocationAndDetailsProps {
  locationAndDetails: {
    description: string;
    latitude: number;
    longitude: number;
    day: string;
    time: string;
  };
}

const LocationAndDetails: React.FC<LocationAndDetailsProps> = (props): JSX.Element => {
  const shouldShimmer = useContext(SkeletonLoaderContext);
  if (!shouldShimmer) {
    return (
      <StyledUl>
        {/* <li>{props.locationAndDetails.city}, {props.locationAndDetails.state}</li> */}
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
