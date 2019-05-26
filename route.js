import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import button from './Hello';
import card from './Card'

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div className="flx">
      <div className="side">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className="rside">
        <Route path="/" exact component={button} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        </div>

        
      </div>
    </Router>
  );
}

export default AppRouter;