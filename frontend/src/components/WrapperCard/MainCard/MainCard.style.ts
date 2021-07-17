import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  align-items: center;
  gap: 4rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: transparent;
  & * {
    background-color: transparent;
  }
  /* border: solid 5px yellow; */
`;
