import { useEffect, useState } from 'react';
import './App.css';
import Memegenerator from './components/THA22/MemeGenerator';
import Custom from './components/THA23/Custom';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {


  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/tha23">THA23</Link>
          </li>
          <li>
            <Link to="/tha22">THA22</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/home">
        </Route>
        <Route path="/tha22">
          <Memegenerator/>
        </Route>
        <Route path="/tha23">
          <Custom />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
