import Footer from "./components/Footer/Footer";
import WrapperCard from "./components/WrapperCard/index";
import { WrapperFlexDiv } from "./styles/App.style";
import { GlobalStyle } from "./styles/Global.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <WrapperFlexDiv>
        <WrapperCard />
        <Footer />
      </WrapperFlexDiv>
    </>
  );
};

export default App;
