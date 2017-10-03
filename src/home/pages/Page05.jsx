import React, { Component } from 'react';
// import page_03 from '../../images/page_03.png';

class Page05Component extends Component {
  render() {
    return (
        <div className="page-05">
          <div className="page-05-header">
            <h3 className="title">
              宽拓<span>产品</span>系列
            </h3>
          </div>
          <div className="features">
            <div>
              <div className="icon icon-smart"></div>
              <p>智能投资</p>
            </div>
            <div>
              <div className="icon icon-core"></div>
              <p>核心科技</p>
            </div>
            <div>
              <div className="icon icon-technology"></div>
              <p>技术支持</p>
            </div>
          </div>
          <div className="page-03-footer">
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
        </div>
    )
  }
}

export default Page05Component;