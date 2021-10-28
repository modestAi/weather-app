import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";

export const FooterDiv = styled.div`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  color: rgb(255, 255, 255, 0.6);
  margin-top: auto;
  font-size: 0.7rem;
`;

export const Paragraph = styled.p`
  font-family: inherit;
  color: inherit;
  padding: 0.5rem 0;
  font-size: inherit;
`;

export const AnchorTag = styled.a`
  position: relative;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  transition: all 100ms ease-ease-in-out;
  
  &:hover {
    color: rgb(255, 255, 255);
    &:before {
      visibility: visible;
      width: 100%;
    }
  }

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 2px;
    background-color: white;
    box-shadow: white 0px -3px 25px 1px;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
`;

export const HeartIcon = () => {
  return (
    <IconContext.Provider value={{ color: "#da4b6f", size:"0.7rem"}}>
      <AiFillHeart />
    </IconContext.Provider>
  );
};
