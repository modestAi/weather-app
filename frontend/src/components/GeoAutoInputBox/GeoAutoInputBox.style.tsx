import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
`;

export const ContainerDiv = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: inherit;
  font-size: 0.7rem;
  height: 1.5rem;
  transition: border 0.1s ease-in-out;
  padding: 0.3rem 0.5rem;
  border: 0.1rem solid #5cdb95bc;
  background-color: rgb(255, 255, 255, 0.03);
  &:focus,
  &:hover {
    background-color: rgb(255, 255, 255, 0.06);
    border: 0.1rem solid #5cdb95;
  }
`;

export const FlexColumnSuggestionListDiv = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  top: 100%;
  flex-direction: column;
  overflow: hidden scroll;
  font-size: 0.8rem;
  color: rgb(255, 255, 255, 0.7);
  max-height: 5rem;
  width: inherit;
  gap: 0;
  border: solid 1px rgb(255, 255, 255, 0.2);
  border-top: none;
`;
