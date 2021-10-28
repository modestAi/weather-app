import PageNotFound from "./components/PageNotFound/PageNotFound";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./styles/Global.style";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
