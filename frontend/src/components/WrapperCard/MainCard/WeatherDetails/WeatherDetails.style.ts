import styled from "styled-components";

export const TransparentButton = styled.button<{ isSelected: boolean }>`
  cursor: pointer;
  background-color: transparent;
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  color: ${(props) =>
    props.isSelected ? "rgb(255, 255, 255, 0.87)" : "rgb(255, 255, 255, 0.30)"};
  border: none;
  &:hover {
    color: ${(props) =>
      !props.isSelected
        ? "rgb(255, 255, 255, 0.60)"
        : "rgb(255, 255, 255, 0.87)"};
  }
  /* border: 2px solid red; */
`;

export const InlineImg = styled.img`
  display: inline;
  /* border: 2px solid red; */
`;

export const InlinePara = styled.p`
  display: inline;
  /* border: 2px solid blue; */
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.3rem 0.5rem;
  margin: 0%;
  & * {
    font-size: 1.5rem;
  }
  /* border: 1px solid white; */
`;


