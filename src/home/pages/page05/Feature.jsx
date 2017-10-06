import React, { Component } from 'react';
import './index.css';

// 合作伙伴
class FeatureComponent extends Component {
  render() {
    return (
      <div className="features">
        <div className="features-item">
          <div className="icon icon-smart"></div>
          <p>智能投资</p>
        </div>
        <div className="features-item">
          <div className="icon icon-core"></div>
          <p>核心科技</p>
        </div>
        <div className="features-item">
          <div className="icon icon-technology"></div>
          <p>技术支持</p>
        </div>
      </div>
    )
  }
}

export default FeatureComponent;