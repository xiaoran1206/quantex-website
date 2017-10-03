import React, { Component } from 'react';
// import page_03 from '../../images/page_03.png';

class Page03Component extends Component {
  render() {
    return (
        <div className="page-03">
          <p className="nav">QU<br/><span>A</span><br/>NTEX</p>
          <div className="page-03-header">
            <h3 className="title">
              宽拓产品<span>行业</span>提供服务
            </h3>
            <p className="description">宽拓科技为您提供<span>贴身方案</span><span>精良产品</span><span>优质实施</span>助力金融机构转型</p>
          </div>
          <div className="topology">图片</div>
          <div className="page-03-footer">
            <a>咨询服务</a>
            <span className="divider"></span>
            <a>方案实施</a>
            <span className="divider"></span>
            <a>运营服务</a>
          </div>
        </div>
    )
  }
}

export default Page03Component;