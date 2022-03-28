import React, { Component }from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import NewComplain from "./components/newcomplain.component";
import DatatablePage from "./components/Pagination";
import Feedback from "./components/Feedback";
export class App extends Component {
  render() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              PROJECT_NAME
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login as User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Login as Operator
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/complains/new"}>
                    Register new Complain
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/complains/page"}>
                    Get All Complains
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/complains/id/page"}>
                    Complains by User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/feedback"}>
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/complains/new" component={NewComplain} />
              <Route path="/complains/page" component={DatatablePage} />
              <Route path="/complains/id/page" component={DatatablePage} />
              <Route path="/feedback" component={Feedback} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );};
}
export default App;
