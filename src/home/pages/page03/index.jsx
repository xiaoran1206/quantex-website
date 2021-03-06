import React, { Component } from 'react';
import archPng from '../../../images/page03/img_architecture.png';
import archPngLg from '../../../images/page03/img_architecture_lg.png';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index'; // 向下滚动提示箭头
import Footer from './Footer'; // 页脚部分

class Page03Component extends Component {
  constructor() {
    super();
    console.log("走进 constructor -======");
  }
  render() {
    console.log("进来一次");
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
                <img src={archPng} alt="图片加载失败"
                     srcSet={`${archPng} 592w, ${archPngLg} 1158w`}
                     sizes="(max-width: 1920px) 592px, 1158px"/>
              </span>
            </div>
          </div>
          <Footer/>
          <Arrow nextIndex={3}/>
        </div>
    )
  }
}

export default Page03Component;