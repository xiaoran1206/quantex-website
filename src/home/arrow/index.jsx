import React, { Component } from 'react';
import './index.css';

// 箭头向下滚动动画组件
class ArrowComponent extends Component {
  render() {
    return (
      <div className="arrow-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    )
  }
}

export default ArrowComponent;