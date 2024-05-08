import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";

export default function Nav() {
  return (
    <Router>
      <Switch>
        <Route path="/coin/:coinId">
          <Coin />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
