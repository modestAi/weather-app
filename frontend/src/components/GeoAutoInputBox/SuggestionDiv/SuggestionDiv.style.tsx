import styled from "styled-components";

export const Div = styled.div`
  background-color: rgb(255, 255, 255, 0.02);
  width: inherit;
  cursor: pointer;
  font-size: inherit;
  padding: 0.1rem 0.2rem;
  color: inherit;
  &:hover {
    color: rgb(255, 255, 255, 0.81);
    background-color: rgb(255, 255, 255, 0.04);
  }
`;

export const HighlightedDiv = styled.div`
  background-color: rgb(255, 255, 255, 0.04);
  width: inherit;
  cursor: pointer;
  color: rgb(255, 255, 255, 0.81);
  font-size: inherit;
  padding: 0.1rem 0.2rem;
`;
