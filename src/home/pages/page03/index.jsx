import React, { Component } from 'react';
import archPng from '../../../images/page03/img_architecture.png';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index'; // 向下滚动提示箭头
import Footer from './Footer'; // 页脚部分

class Page03Component extends Component {
  render() {
    return (
        <div className="page-container page-03">
          <Nav active={3}/>
          <div className="main">
            <div className="page-03-header">
              <div className="page-title">
                <h3>宽拓行业提供服务</h3>
                <hr/>
                <p className="description">宽拓科技为您提供<span>贴身方案</span><span>精良产品</span><span>优质实施</span>助力金融机构转型</p>
              </div>
            </div>
            <div className="topology">
              <span className="topology-img">
                <img src={archPng} alt="图片加载失败"/>
              </span>
            </div>
          </div>
          <Footer/>
          <Arrow/>
        </div>
    )
  }
}

export default Page03Component;