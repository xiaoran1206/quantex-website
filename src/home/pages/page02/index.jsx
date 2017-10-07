import React, { Component } from 'react';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index'; // 向下滚动提示箭头
import TagCloud from './TagCloud';
import './index.css';

class Page02Component extends Component {
  render() {
    return (
        <div className="page-container page-02">
          <Nav active={2}/>
          <TagCloud/>
          <div className="page-02-footer">
            <p>通过深度的、360度无死角的技术分析, 建立企业用户画像,</p>
            <p>达到产品与用户的精准匹配, 全方位满足每个用户的个性需求, 帮助企业完成精准营销。</p>
          </div>
          <Arrow/>
        </div>
    )
  }
}

export default Page02Component;