import React, { useContext } from "react";
import { usePreferred } from "../../../../hooks/usePreferred";
import { getPreferredUnitTemp } from "../../../../utils/CorrectUnitGetter";
import { SkeletonLoaderContext } from "../../WrapperCard";

import { CenteredPara, FlexDiv, InlinePara, Image, RawFlexDiv, NoWrapDiv } from "./SmallCard.style";
import SmallCardSkeletonLoader from "./SmallCardSkeletonLoader";

interface SmallCardProps {
  maxTemp: number;
  minTemp: number;
  icon: string;
  onClickHandler: (index: number) => void;
  day: string;
  listId: number;
  selectedCard: number;
}

const SmallCard: React.FC<SmallCardProps> = ({
  maxTemp,
  minTemp,
  icon,
  day,
  listId,
  onClickHandler,
  selectedCard,
}): JSX.Element => {
  
  const { preferredUnit } = usePreferred();

  let resultMaxTemp = getPreferredUnitTemp(maxTemp, preferredUnit);
  let resultMinTemp = getPreferredUnitTemp(minTemp, preferredUnit);

  const shouldShimmer = useContext(SkeletonLoaderContext);
  if (!shouldShimmer) {
    return (
      <FlexDiv
        isSelected={listId === selectedCard}
        onClick={() => {
          onClickHandler(listId);
        }}
      >
        <RawFlexDiv>
          <CenteredPara>{day.substring(0, 3)}</CenteredPara>
          <div>
            <Image src={icon} alt="None" />
          </div>
        </RawFlexDiv>
        <NoWrapDiv>
          <div>
            <InlinePara primary>{resultMaxTemp}&nbsp;</InlinePara>
            <InlinePara>{resultMinTemp}</InlinePara>
          </div>
        </NoWrapDiv>
      </FlexDiv>
    );
  } else {
    return <SmallCardSkeletonLoader />;
  }
};

export default SmallCard;
