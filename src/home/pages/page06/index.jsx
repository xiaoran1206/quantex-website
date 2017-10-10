import React, { Component } from 'react';
import Nav from '../../nav/index'; // 导航部分
import Partner from './Partner'; // 合作伙伴部分
import Footer from './Footer'; // 页脚部分

class Page06Component extends Component {

  // 返回顶部 TODO: 不起作用
  backToTop = () => {
    // window.history.go(-5);
    // window.history.replaceState(null, null, "/#FinTech");
    window.location.href  = "#FinTech";
  };
  render() {
    return (
        <div className="page-container page-06">
          <Nav active={6}/>
          <div className="main">
            <div className="page-title">
              <h3>核心客户</h3>
              <hr/>
            </div>
            <Partner/>
            <div className="back-to-top" onClick={this.backToTop}></div>
          </div>
          <Footer/>
        </div>
    )
  }
}

export default Page06Component;