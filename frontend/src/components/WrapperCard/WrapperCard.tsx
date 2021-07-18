import React, { useEffect, useState } from "react";
import { getData, Coordinates } from "../../utils/mapJSON";
import MainCard from "./MainCard/index";
import { DataModel } from "../../utils/mapJSON";
import SmallCardContainer from "./SmallCardsContainer/index";
import { WrapperInnerDiv, MiddleDiv, OutermostDiv } from "./WrapperCard.style";
import MainCardSkeletonLoader from "./MainCard/MainCardSkeletonLoader";
import SmallCardContainerSkeletonLoader from "./SmallCardsContainer/SmallCardContainerSkeletonLoader";

export const SkeletonLoaderContext = React.createContext(false);

const WrapperCard: React.FC = (): JSX.Element => {
  const [shimmerState, setShimmerState] = useState(false);
  const [locationState, setLocationState] = useState<{ latitude: number; longitude: number }>();
  const [data, setDataState] = useState<{ res: DataModel[] }>({ res: [] });
  const [indexState, setIndexState] = useState(0);

  useEffect(() => {
    (function initUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocationState({ latitude, longitude });
          setShimmerState(false);
        });
      }
    })();
  }, []);

  const onLocationChange = (
    setShimmerState: React.Dispatch<React.SetStateAction<boolean>>,
    locationState: Coordinates,
    setDataState: React.Dispatch<React.SetStateAction<{ res: DataModel[] }>>
  ) => {
    setShimmerState(true);
    fetch(`http://localhost:3001/api/weather/${locationState.latitude}/${locationState.longitude}`)
      .then((response) => response.json())
      .then((e) => {
        setDataState({ res: getData(e.weeklyArray, e.location) });
            setShimmerState(false);
      })
      .catch(() => setShimmerState(true));
  };

  useEffect(() => {
    if (locationState) {
      onLocationChange(setShimmerState, locationState, setDataState);
    }
  }, [locationState]);

  const handleClick = (index: number): void => {
    setIndexState(index);
  };

  const getSmallCardData = (
    data: DataModel[]
  ): {
    day: string;
    icon: string;
    maxTemp: number;
    minTemp: number;
  }[] => {
    return data.map((e) => {
      return {
        day: e.day,
        icon: e.image,
        maxTemp: e.maxTemp,
        minTemp: e.minTemp,
      };
    });
  };

  if (data.res && data.res.length > 0) {
    return (
      <>
        {!shimmerState && (
          <OutermostDiv>
            <MiddleDiv>
              <WrapperInnerDiv>
                <MainCard data={data.res[indexState]} />
                <SmallCardContainer
                  onClickProp={handleClick}
                  data={getSmallCardData(data.res)}
                  currentSelected={indexState}
                />
              </WrapperInnerDiv>
            </MiddleDiv>
          </OutermostDiv>
        )}

        {shimmerState && (
          <OutermostDiv>
            <MiddleDiv>
              <WrapperInnerDiv>
                <SkeletonLoaderContext.Provider value={shimmerState}>
                  <MainCard data={data.res[indexState]} />
                  <SmallCardContainer
                    onClickProp={handleClick}
                    data={getSmallCardData(data.res)}
                    currentSelected={indexState}
                  />
                </SkeletonLoaderContext.Provider>
              </WrapperInnerDiv>
            </MiddleDiv>
          </OutermostDiv>
        )}
      </>
    );
  } else {
    return (
      <OutermostDiv>
        <MiddleDiv>
          <WrapperInnerDiv>
            <MainCardSkeletonLoader />
            <SmallCardContainerSkeletonLoader />
          </WrapperInnerDiv>
        </MiddleDiv>
      </OutermostDiv>
    );
  }
};

export default WrapperCard;
