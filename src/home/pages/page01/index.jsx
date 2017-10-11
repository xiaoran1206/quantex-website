import React, { Component } from 'react';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index';
import logo from '../../../images/img_logo_hd.png';
import pageTitlePng from '../../../images/page_01_title.png';
import './index.css';

class Page01Component extends Component {
  // state = {
  //   curPage: "#FinTech"
  // };
  componentDidMount() {
    window.history.pushState(null, null, "/#FinTech");
    // window.location.href  = "#FinTech";
  }

  render() {
    return (
        <div className="page-container page-01">
          <Nav active={1}/>
          <div>
            <div className="header-logo">
              <img src={logo} alt="logo加载失败"/>
            </div>
            <ul className="header-nav">
              <li className="active"><a>FinTech</a></li>
              <li><a>关于Quantex</a></li>
              <li><a>产品系列</a></li>
            </ul>
            <div className="tel">
              <i className="icon-tel"/>
              <span>400-400-1112</span>
            </div>
          </div>
          <div className="main">
           <div className="img-container">
             <img src={pageTitlePng} alt="图片加载失败"/>
           </div>
          </div>
          <Arrow/>
        </div>
    )
  }
}

export default Page01Component;