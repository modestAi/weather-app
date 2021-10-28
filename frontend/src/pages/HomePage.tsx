import styled from "styled-components";
import Footer from "../components/Footer";
import WrapperCard from "../components/WrapperCard/";

const WrapperFlexDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  return (
    <WrapperFlexDiv>
      <WrapperCard />
      <Footer />
    </WrapperFlexDiv>
  );
};

export default HomePage;
