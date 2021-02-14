import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import Home from "./components/home/Home";
import ErrorPage from "./components/error/ErrorPage";

import { useEffect, useState } from "react";
import "./global.css";

function App() {

  return (
    <div className="app-c0">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
