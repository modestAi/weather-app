import styled, { css } from "styled-components";

export const WrapperDiv = styled.div`
  font-family: "Oswald", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  gap: 10em;
`;

export const FlexRowDiv = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const Button = styled.button`
  color: rgb(255, 255, 255, 0.81);
  border: 2px solid #fc4672;
  padding: 0.5rem 1rem;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #fc4672;
  transition: ease-in-out 0.5s;
  &:hover {
    box-shadow: inset 400px 0 0 0 #fc4672;
  }
`;

export const Para = styled.p`
  font-family: inherit;
  font-weight: 300;
  font-size: 1rem;
  color: rgb(255, 255, 255, 0.81);
`;

export const HeaderNumbers = styled.p<{ hoverColor?: string }>`
  font-size: 4rem;
  font-weight: bold;
  font-family: inherit;
  color: rgb(255, 255, 255, 0.81);
  transition: all 250ms ease-in-out;
  ${(props) =>
    props.hoverColor &&
    css`
      &:hover {
        color: ${props.hoverColor};
      }
    `}
`;

export const HeaderText = styled.p`
  font-size: 3rem;
  font-family: inherit;
  color: rgb(255, 255, 255, 0.81);
`;

export const HeaderText2 = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  font-family: inherit;
  color: rgb(255, 255, 255, 0.81);
`;

export const Div = styled.div`
  font-family: inherit;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: inherit;
  justify-content: center;
  align-items: center;
`;
