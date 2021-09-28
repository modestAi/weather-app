import { AnchorTag, HeartIcon, Paragraph, Section } from "./Footer.style";

const Footer = ():JSX.Element => {
  return (
    <Section>
      <Paragraph>
        Made with {HeartIcon()} by
        <AnchorTag target="_blank" href="https://github.com/modestAi">
          {" "}
          The modest Ai
        </AnchorTag>
      </Paragraph>
    </Section>
  );
};

export default Footer;
