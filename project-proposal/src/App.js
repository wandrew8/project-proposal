import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Wireframes from './pages/Wireframes';
import Dependencies from './pages/Dependencies';
import Tasks from './pages/Tasks';
import Plans from './pages/Plans';
import './App.scss';

function App() {
  return (
    <Router basename="/project-proposal">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wireframes" component={Wireframes} />
        <Route path="/dependencies" component={Dependencies} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/plans" component={Plans} />
      </Switch>
    </Router>
  );
}

export default App;
