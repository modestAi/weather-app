import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";

export const Section = styled.section`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  color: rgb(255, 255, 255, 0.81);
`;

export const Paragraph = styled.section`
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
`;

export const AnchorTag = styled.a`
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
  transition: all 100ms ease-ease-in-out;
  &:hover {
    color: rgb(255, 255, 255);
  }
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const HeartIcon = () => {
  return (
    <IconContext.Provider value={{ color: "#da4b6f"}}>
        <AiFillHeart />
    </IconContext.Provider>
  );
};
