import React, { Component } from 'react';
import './index.css';

class FooterComponent extends Component {
  render() {
    return (
      <div className="page-05-footer">
        <h4>产品用户体验现代感强, 可视化程度高</h4>
        <div className="systems">
          <div className="sys-oems">
            <div className="icon-sys icon-sys-oems"></div>
            <p>核心交易系统<br/>QuantexOEMS</p>
          </div>
          <div className="sys-ims">
            <div className="icon-sys icon-sys-ims"></div>
            <p>金融数据分析平台<br/>QuantexData</p>
          </div>
          <div className="sys-data">
            <div className="icon-sys icon-sys-data"></div>
            <p>宽拓投资管理系统<br/>QuantexIMS</p>
          </div>
          <div className="sys-cvm">
            <div className="icon-sys icon-sys-cvm"></div>
            <p>宽拓投资管理系统<br/>QuantexCVM</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterComponent;