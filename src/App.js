import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Edit from './component/Edit';
import View from './component/View';
import Insert from './component/Insert';


function App() {
  return (
    <Router>
      <div className="container-fluid" style={{ alignSelf: 'stretch', }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/insert"} className="nav-link">Insert</Link>
              </li>
              <li className="nav-item">
                <Link to={"/view"} className="nav-link">View</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Test</Link>
              </li>
            </ul>

          </div>
        </nav>
        <h2>Welcome</h2>
        <Switch>
          <Route exact path='/insert' component={Insert} />
          <Route exact path='/edit/:id' component={Edit} />
          <Route exact path='/view' component={View} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
