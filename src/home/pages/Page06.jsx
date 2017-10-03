import React, { Component } from 'react';
// import page_03 from '../../images/page_03.png';

class Page06Component extends Component {
  render() {
    return (
        <div className="page-06">
          <div className="page-06-header">
            <h3 className="title">
              核<span>心客</span>户
            </h3>
          </div>
          <div className="page-06-body">
            <div className="partners">
              <div className="partners-item partners-js"></div>
              <div className="partners-item partners-nh"></div>
              <div className="partners-item partners-zx"></div>
              <div className="partners-item partners-tpy"></div>
            </div>
          </div>
          <div className="page-06-footer">
            <div className="links">
              <h5 className="links-title">产品</h5>
              <ul>
                <li>QuantexOEMS</li>
                <li>QuantexData</li>
                <li>QuantexIMS</li>
                <li>QuantexCVM</li>
              </ul>
            </div>
            <div className="links">
              <h5 className="links-title">解决方案</h5>
              <ul>
                <li>投资管理</li>
                <li>数据分析</li>
              </ul>
            </div>
            <div className="links">
              <h5 className="links-title">服务</h5>
              <ul>
                <li>咨询服务</li>
                <li>贴身方案</li>
                <li>精良产品</li>
                <li>优质实施</li>
              </ul>
            </div>
            <div className="links">
              <h5 className="links-title">联系我们</h5>
              <ul>
                <li>电话: 400-175-9889</li>
                <li>邮箱: service@iquantex.com</li>
                <li>地址: 北京市西城区西直门韩建金茂大厦C2座805室</li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Page06Component;