import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Users />
        </Fragment>
      </Router>
    );
  }
}
