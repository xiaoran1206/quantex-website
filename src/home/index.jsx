import React, { Component } from 'react';
import logo from '../images/logo.svg';
import page_01 from '../images/page_01.png';
// import { page_01_1 } from '../images/page_01_1.png';
import './index.css';

class HomeComponent extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={ page_01 } className="App-logo" alt="page_01" />
            <div className="page_01_1" alt="page_01_1"></div>
            <h1 className="App-title">Welcome to React11</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
    );
  }
}

export default HomeComponent;
