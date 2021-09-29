import { AnchorTag, HeartIcon, Paragraph, FooterDiv } from "./Footer.style";

const Footer = ():JSX.Element => {
  return (
    <FooterDiv>
      <Paragraph>
        Made with {HeartIcon()} by
        <AnchorTag target="_blank" href="https://github.com/modestAi">
          {" "}
          The modest Ai
        </AnchorTag>
      </Paragraph>
    </FooterDiv>
  );
};

export default Footer;
