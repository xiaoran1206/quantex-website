import React, { Component } from 'react';
import './index.css';

// 箭头向下滚动动画组件
class ArrowComponent extends Component {

  scrollToPage = () => {
    const pageList = ['FinTech', '关于Quantex', '产品系列', 'Solution', 'Feature', 'Partner'];
    window.location.href  = "#" + pageList[this.props.nextIndex];
  };
  render() {
    return (
      <div className="arrow-container" onClick={this.scrollToPage}>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    )
  }
}

export default ArrowComponent;