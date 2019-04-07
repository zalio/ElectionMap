import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage}></Route>
      </Router>
    );
  }
}

export default App;
