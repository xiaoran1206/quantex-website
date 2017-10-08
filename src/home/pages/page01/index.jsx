import React, { Component } from 'react';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index';
import './index.css';

class Page01Component extends Component {
  componentDidMount() {
    window.history.pushState(null, null, "/#FinTech");
  }
  render() {
    return (
        <div className="page-container page-01">
          <Nav active={1}/>
          <div className="logo-header"></div>
          <div className="tel">
            <i className="icon-tel"/>
            <span>400-400-1112</span>
          </div>
          <Arrow/>
        </div>
    )
  }
}

export default Page01Component;