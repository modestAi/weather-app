import Footer from "./components/Footer/Footer";
import WrapperCard from "./components/WrapperCard/index";
import { FlexDiv } from "./styles/App.style";
import { GlobalStyle } from "./styles/Global.style";

function App() {
  return (
    <div>
      <GlobalStyle />
      <FlexDiv>
        <WrapperCard />
      </FlexDiv>
    </div>
  );
}

export default App;
