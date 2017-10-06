import React, { Component } from 'react';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index'; // 向下滚动提示箭头
import './index.css';

class Page04Component extends Component {
  render() {
    return (
        <div className="page-container page-04">
          <Nav active={4}/>
          <Arrow/>
        </div>
    )
  }
}

export default Page04Component;