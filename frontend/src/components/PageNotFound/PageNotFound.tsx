import { useHistory } from "react-router-dom";
import { WrapperDiv, Div, FlexRowDiv, HeaderNumbers, HeaderText, HeaderText2, ColumnDiv, Button } from "./PageNotFound.style";

const PageNotFound = () => {
  const history = useHistory();

  const routeChange = () => {
    history.push("/");
  };

  return (
    <WrapperDiv>
      <ColumnDiv>
        <FlexRowDiv>
          <HeaderNumbers hoverColor={"#fc4672"}>4</HeaderNumbers>
          <HeaderNumbers hoverColor={"#03dac5"}>0</HeaderNumbers>
          <HeaderNumbers hoverColor={"#5cdb95"}>4</HeaderNumbers>
          <HeaderText> Page Not Found</HeaderText>
        </FlexRowDiv>
        <HeaderText2> Why not check out the weather report today?</HeaderText2>
      </ColumnDiv>
      <Div>
        <Button onClick={routeChange}> Go home</Button>
      </Div>
    </WrapperDiv>
  );
};

export default PageNotFound;
