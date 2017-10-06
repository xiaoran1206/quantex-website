import React, { Component } from 'react';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index'; // 向下滚动提示箭头
import Feature from './Feature'; // 特色部分
import Footer from './Footer'; // 页脚部分

class Page05Component extends Component {
  render() {
    return (
        <div className="page-container page-05">
          <Nav active={5}/>
          <div className="main">
            <h3 className="page-title">
              宽拓<span>产品</span>系列
            </h3>
            <Feature/>
          </div>
          <Footer/>
          <Arrow/>
        </div>
    )
  }
}

export default Page05Component;