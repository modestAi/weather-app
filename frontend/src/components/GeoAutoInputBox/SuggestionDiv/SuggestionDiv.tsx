import { Div, HighlightedDiv } from "./SuggestionDiv.style";

interface SuggestionDivProps {
  index: number;
  isHighlighted: number;
  onClickHandler: (index: number) => void;
  placeName: string;
}

const isDivHighlighted = (highlightedIndex: number, index: number): boolean => {
  if (highlightedIndex > -1) {
    if (highlightedIndex === index) return true;
  }
  return false;
};

const SuggestionDiv: React.FC<SuggestionDivProps> = ({
  index,
  isHighlighted,
  placeName,
  onClickHandler,
}): JSX.Element => {
  return (
    <>
      {!isDivHighlighted(isHighlighted, index) && <Div onClick={() => onClickHandler(index)}>{placeName}</Div>}
      {isDivHighlighted(isHighlighted, index) && (
        <HighlightedDiv onClick={() => onClickHandler(index)}>{placeName}</HighlightedDiv>
      )}
    </>
  );
};

export default SuggestionDiv;
