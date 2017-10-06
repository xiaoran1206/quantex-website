import React, { Component } from 'react';
import Nav from '../nav/index'; // 导航部分
import Partner from './page06/Partner'; // 合作伙伴部分
import Footer from './page06/Footer'; // 页脚部分

class Page06Component extends Component {

  // scrollToTop = () => {
  //   window.scrollTo(0, 0);
  //   // this.forceUpdate();
  // };
  render() {
    return (
        <div className="page-container page-06">
          <Nav active={6}/>
          <div className="main">
            <h3 className="page-title">核<span>心客</span>户</h3>
            <Partner/>
          </div>
          <Footer/>
        </div>
    )
  }
}

export default Page06Component;