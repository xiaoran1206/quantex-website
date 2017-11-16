import React, { Component } from 'react';
import './index.css';

class FooterComponent extends Component {
  render() {
    return (
        <div className="page-06-footer">
          <div className="logo-footer"></div>
          <dl className="site-link">
            <dt>产品</dt>
            <dd>QuantexOEMS</dd>
            <dd>QuantexData</dd>
            <dd>QuantexIMS</dd>
            <dd>QuantexCVM</dd>
          </dl>
          <dl className="site-link">
            <dt>解决方案</dt>
            <dd>投资管理</dd>
            <dd>数据分析</dd>
          </dl>
          <dl className="site-link">
            <dt>服务</dt>
            <dd>咨询服务</dd>
            <dd>贴身方案</dd>
            <dd>精良产品</dd>
            <dd>优质实施</dd>
          </dl>
          <dl className="site-link">
            <dt>联系我们</dt>
            <dd>电话: 010-533-66401</dd>
            <dd>邮箱: service@iquantex.com</dd>
            <dd>地址: 北京市西城区西直门韩建金茂大厦C2座805室</dd>
          </dl>
        </div>
    )
  }
}

export default FooterComponent;