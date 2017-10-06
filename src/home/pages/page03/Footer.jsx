import React, { Component } from 'react';
import './index.css';

class FooterComponent extends Component {
  render() {
    return (
      <div className="page-03-footer">
        <a>咨询服务</a>
        <span className="divider"></span>
        <a>方案实施</a>
        <span className="divider"></span>
        <a>运营服务</a>
      </div>
    )
  }
}

export default FooterComponent;