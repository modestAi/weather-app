import React from "react";
import { StyledDiv } from "./SmallCardContainer.style";
import SmallCard from "./SmallCards/index";

interface SmallCardContainerProps {
  data: { maxTemp: number; minTemp: number; icon: string; day: string }[];
  onClickProp: (index: number) => void;
  currentSelected: number;
}

const SmallCardContainer: React.FC<SmallCardContainerProps> = (props): JSX.Element => {
  return (
    <StyledDiv>
      {props.data.map((item, index) => (
        <SmallCard
          selectedCard={props.currentSelected}
          key={`${item.day}` + index}
          listId={index}
          maxTemp={item.maxTemp}
          minTemp={item.minTemp}
          icon={item.icon}
          day={item.day}
          onClickHandler={props.onClickProp}
        />
      ))}
    </StyledDiv>
  );
};

export default SmallCardContainer;
