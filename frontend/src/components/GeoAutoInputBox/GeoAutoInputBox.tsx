import React, { useEffect, useRef, useState } from "react";
import { ContainerDiv, FlexColumnSuggestionListDiv, FlexDiv, Input } from "./GeoAutoInputBox.style";
import SuggestionDiv from "./SuggestionDiv/index";

type Result = {
  placeName: string;
  coordinates: { lat: number; long: number };
}[];

interface GeoAutoInputBoxProps {
  onNewLocation: (coordinates: { lat: number; long: number }, placeName: string) => void;
  placeName?: string;
  coordinates?: { lat: number; long: number };
}

const GeoAutoInputBox: React.FC<GeoAutoInputBoxProps> = ({ onNewLocation, placeName, coordinates }): JSX.Element => {
  const [selectedSuggestionIndexState, setSelectedSuggestionIndexState] = useState<{ num: number } | null>(null);
  const [suggestionsState, setSuggestionsState] = useState<{ placesAndCoordinates: Result } | null>(null);
  const [displayState, setDisplayState] = useState(false);
  const [inputTextState, setInputTextState] = useState("");
  const [lastSelectedTextState, setLastSelectedTextState] = useState("");
  const [highlightState, setHighlightState] = useState(-1);
  const [displayOnEscapeState, setDisplayOnEscapeState] = useState(false);
  const [shouldMakeReqState, setShouldMakeReqState] = useState(true);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperDivRef = useRef<HTMLInputElement | null>(null); // wrap = wrapperRef.current

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    if (suggestionsState && !shouldMakeReqState && highlightState >= 0)
      setInputTextState(suggestionsState.placesAndCoordinates[highlightState].placeName);
  }, [highlightState]);

  useEffect(() => {
    const makeRequestOnChange = async () => {
      const rawRes = await fetch(`http://localhost:3001/api/autocomplete/${inputTextState}`);
      const res = await rawRes.json();
      setSuggestionsState({ placesAndCoordinates: res });
    };
    if (shouldMakeReqState && inputRef.current?.value !== "") {
      makeRequestOnChange().then(() => setDisplayState(true));
    }
  }, [inputTextState]);

  useEffect(() => {
    setDisplayState(() => false);
    setShouldMakeReqState(() => true);
    if (selectedSuggestionIndexState && suggestionsState) {
      setInputTextState(() => suggestionsState.placesAndCoordinates[selectedSuggestionIndexState.num].placeName);
      const coordinates = suggestionsState.placesAndCoordinates[selectedSuggestionIndexState.num].coordinates;
      const placeName = suggestionsState.placesAndCoordinates[selectedSuggestionIndexState.num].placeName;
      onNewLocation(coordinates, placeName);
    }
  }, [selectedSuggestionIndexState]);

  useEffect(() => {
    if (!displayState) setHighlightState(-1);
  }, [displayState]);

  useEffect(() => {
    if (displayOnEscapeState) {
      setDisplayState(() => false);
      setInputTextState(() => lastSelectedTextState);
    }
  }, [displayOnEscapeState]);

  const handleClickOutside = (event: MouseEvent) => {
    const { current: wrap } = wrapperDivRef;
    const { target: val } = event;
    if (wrap && !wrap.contains(val as HTMLElement)) setDisplayState(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowUp":
        if (shouldMakeReqState) setShouldMakeReqState(() => false);
        if (selectedSuggestionIndexState && suggestionsState) {
          setLastSelectedTextState(
            () => suggestionsState.placesAndCoordinates[selectedSuggestionIndexState.num].placeName
          );
        }
        if (suggestionsState && displayState && highlightState > -1) {
          const maxSuggestionArrayIndex = suggestionsState.placesAndCoordinates.length;
          if (highlightState !== 0) setHighlightState((highlightState) => highlightState - 1);
          else setHighlightState(() => maxSuggestionArrayIndex - 1);
        } else setHighlightState(() => 0);
        break;
      case "ArrowDown":
        if (shouldMakeReqState) setShouldMakeReqState(() => false);
        if (selectedSuggestionIndexState && suggestionsState)
          setLastSelectedTextState(
            () => suggestionsState.placesAndCoordinates[selectedSuggestionIndexState.num].placeName
          );
        if (displayState && suggestionsState && highlightState > -1) {
          const maxSuggestionArrayIndex = suggestionsState.placesAndCoordinates.length;
          if (highlightState !== maxSuggestionArrayIndex - 1) setHighlightState(highlightState + 1);
          else setHighlightState(0);
        } else setHighlightState(0);
        break;
      case "Enter":
        if (displayState && suggestionsState && highlightState >= 0)
          setSelectedSuggestionIndexState({ num: highlightState });
        break;
      case "Escape":
        setDisplayOnEscapeState(true);
        break;
    }
  };

  const handleSuggestionClick = (val: number) => setSelectedSuggestionIndexState({ num: val });

  const onChangeHandler = () => {
    if (inputRef.current !== null) {
      setInputTextState(inputRef.current.value);
    }
  };

  return (
    <ContainerDiv width={"60vw"} ref={wrapperDivRef}>
      <FlexDiv>
        <Input
          onKeyDown={handleKeyPress}
          onClick={() => {
            setDisplayState(!displayState);
          }}
          autoFocus
          onChange={onChangeHandler}
          ref={inputRef}
          value={inputTextState}
          type="text"
          placeholder={"Search for the location..."}
        ></Input>
      </FlexDiv>
      <FlexColumnSuggestionListDiv>
        {displayState &&
          suggestionsState?.placesAndCoordinates &&
          suggestionsState.placesAndCoordinates.map((e, i) => (
            <SuggestionDiv
              index={i}
              isHighlighted={highlightState}
              placeName={e.placeName}
              key={i + e.placeName}
              onClickHandler={handleSuggestionClick}
            />
          ))}
      </FlexColumnSuggestionListDiv>
    </ContainerDiv>
  );
};

export default GeoAutoInputBox;
