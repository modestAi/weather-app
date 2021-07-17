import styled from "styled-components";

export const FlexDiv = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0.7rem;
  flex: auto;
  width: 11vh;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.isSelected ? "hsla(360, 100%, 100%, 15%)" : "hsla(360, 100%, 100%, 8%)")};
  align-items: center;
  transition: transform 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    
  & * {
    background-color: transparent;
  }

  /*FIXME: MAKE SMALL CARD CONTAINER NOT OVERRIDE THIS RULE AND SPECIFY INNER SHADOW HERE 
  INSTEAD OF 3 TIMES*/
  &:hover {
    transform: scale(1.03) perspective(1px);
  }

  /* border: 1px solid white; */
`;

export const InlinePara = styled.p<{ primary?: boolean }>`
  color: ${(props) => (props.primary ? "rgb(255, 255, 255, 0.87)" : "rgb(255, 255, 255, 0.60)")};
  display: inline;
`;

export const CenteredPara = styled.p`
  font-size: 100%;
  text-align: center;
`;

export const Image = styled.img`
  align-items: center;
`;

export const RawFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoWrapDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
`;
