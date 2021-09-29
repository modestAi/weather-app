import styled from "styled-components";

export const WrapperInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsla(360, 100%, 100%, 3%);
  box-shadow: #fc4672 3px 4px 2.5px 0px, rgba(60, 64, 67, 0.15) -3px 2px 4px 2px;
  border-radius: 1rem;
  margin: 0.5rem;
`;

export const MiddleDiv = styled.div`
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsla(360, 100%, 100%, 2%);
  margin: 0.5rem;
  box-shadow: #03dac5 -2px -3px 1px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const OutermostDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: hsla(360, 100%, 100%, 1%);
  margin: 2rem;
  box-shadow: #5cdb95 -4px 3px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const FlexDiv = styled.div`
  color: rgb(255, 255, 255, 0.87);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
`;
