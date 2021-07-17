import { Div, HighlightedDiv } from "./SuggestionDiv.style";

interface Props {
  index: number;
  isHighlighted: number;
  onClickHandler: (index: number) => void;
  placeName: string;
  coordinates: { lat: number; long: number };
}

const isDivHighlighted = (highlightedIndex: number, index: number): boolean => {
  if (highlightedIndex > -1) {
    if (highlightedIndex === index) return true;
  }
  return false;
};

const SuggestionDiv = (props: Props): JSX.Element => {
  return (
    <>
      {!isDivHighlighted(props.isHighlighted, props.index) && (
        <Div
          onClick={() => {
            props.onClickHandler(props.index);
          }}
        >
          {props.placeName}
        </Div>
      )}

      {isDivHighlighted(props.isHighlighted, props.index) && (
        <HighlightedDiv
          onClick={() => {
            props.onClickHandler(props.index);
          }}
        >
          {props.placeName}
        </HighlightedDiv>
      )}
    </>
  );
};

export default SuggestionDiv;
