import React, { Component } from 'react';
import './index.css';

// 合作伙伴
class PartnerComponent extends Component {
  render() {
    return (
      <div className="partners">
        <div>
          <div className="partners-item partners-js"></div>
          <div className="partners-item partners-nh"></div>
        </div>
        <div>
          <div className="partners-item partners-zx"></div>
          <div className="partners-item partners-tpy"></div>
        </div>
      </div>
    )
  }
}

export default PartnerComponent;