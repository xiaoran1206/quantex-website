import React, { Component } from 'react';
import Nav from '../../nav/index';
import Footer from './Footer'; // 页脚部分

class Page03Component extends Component {
  render() {
    return (
        <div className="page-container page-03">
          <Nav active={3}/>
          <div className="main">
            <div className="page-03-header">
              <h3 className="page-title">
                宽拓产品<span>行业</span>提供服务
              </h3>
              <p className="description">宽拓科技为您提供<span>贴身方案</span><span>精良产品</span><span>优质实施</span>助力金融机构转型</p>
            </div>
            <div className="topology">图片</div>
          </div>
          <Footer/>
        </div>
    )
  }
}

export default Page03Component;