import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pform from "../src/PoemsForm";
import Poems from "./Poem";
import PreviewPoem from "./Homepage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div id="navigation-link">
        <Link className="links" to={"/"}>
          Home
        </Link>
        <Link className="links" to={"/addPoems"}>
          Add a Poem
        </Link>
      </div>
      <Switch>
        <Route path="/poems/:id">
          <Poems />
        </Route>

        <Route path="/addPoems">
          <Pform />
        </Route>

        <Route path="/">
          <PreviewPoem />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
