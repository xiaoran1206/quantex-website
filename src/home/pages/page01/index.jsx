import React, { Component } from 'react';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index';
import logo from '../../../images/img_logo_hd.png';
import pageTitlePng from '../../../images/page_01_title.png';
import './index.css';

class Page01Component extends Component {
  componentDidMount() {
    window.history.pushState(null, null, "/#FinTech");
    // window.location.href  = "#section5";
  }

  /**
   * 切换 tab
   * @param e
   */
  changeTab = (e) => {
    window.location.href  = e.target.getAttribute("href");
  };

  render() {
    return (
        <div className="page-container page-01">
          <Nav active={1}/>
          <div className="page-01-header">
            <div className="header-logo">
              <img src={logo} alt="logo加载失败"/>
            </div>
            <div className="header-nav" onClick={(e) => { this.changeTab(e) }}>
              <a className="active" href="#FinTech">FinTech</a>
              <a href="#关于Quantex">关于Quantex</a>
              <a href="#产品系列">产品系列</a>
            </div>
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