import styled from "styled-components";

export const Div = styled.div`
  background-color: rgb(255, 255, 255, 0.02);
  width: inherit;
  cursor: pointer;
  font-size: inherit;
  padding: 0.1rem 0.2rem;
  color: inherit;
  border-bottom: solid 0.1rem rgb(255, 255, 255, 0.4);
  &:hover {
    background-color: rgb(255, 255, 255, 0.03);
  }
`;

export const HighlightedDiv = styled.div`
  background-color: rgb(255, 255, 255, 0.03);
  width: inherit;
  cursor: pointer;
  font-size: inherit;
  padding: 0.1rem 0.2rem;
  color: inherit;
  border-bottom: solid 0.1rem #03dac5;
`;
