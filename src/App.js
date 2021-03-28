import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar/Navbar.js";
import Card from "./components/Card/Card.js";
import Approval from "./components/Approval/Approval.js";

function App() {
  return (
    <Router>
      <div className="bg-gray-200">
        <Navbar />
        <Switch>
          <Route path="/approval" component={Approval} />
          <Route exact path="/" component={Card} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
