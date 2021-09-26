import styled from "styled-components";

export const TransparentButton = styled.button<{ isSelected: boolean }>`
  cursor: pointer;
  background-color: transparent;
  font-size: inherit;
  width: 3rem;
  color: ${(props) => (props.isSelected ? "rgb(255, 255, 255, 0.87)" : "rgb(255, 255, 255, 0.30)")};
  border: none;
  &:hover {
    color: ${(props) => (props.isSelected ? "rgb(255, 255, 255, 0.87)" : "rgb(255, 255, 255, 0.60)")};
  }
`;

export const InlineImg = styled.img`
  display: inline;
  width: 2.5rem;
  height: 2.5rem;
`;

export const TempPara = styled.p`
  display: inline;
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;  
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.3rem 0.5rem;
  margin: 0%;
  font-size: 1.5rem;
`;
