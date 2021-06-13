import "./dist/css/bootstrap.css";
import "./dist/font/font.css";
import "./dist/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import RobotList from "./robot-list";
import RobotDetail from "./robot-detail.jsx";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/robot-detail/:robotId">
        <RobotDetail />
      </Route>
      <Route path="/">
        <RobotList />
      </Route>
    </Switch>
  </Router>,
  document.querySelector("#root")
);
