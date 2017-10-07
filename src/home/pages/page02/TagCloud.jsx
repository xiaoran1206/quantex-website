import React, { Component } from 'react';
// import './index.css';

// 3D 云标签组件
class TagCloudComponent extends Component {
  componentDidMount() {
    console.log("云标签组件调用 tagCloud 方法");
    window.tagCloud('div1');
    this.setState();
  }

  render() {
    return (
        <div id="div1">
          <a href="http://www.jq22.com">智能化</a>
          <a href="http://www.jq22.com/" className="red">智能化</a>
          <a href="http://www.jq22.com">智能投顾</a>
          <a href="http://www.jq22.com">智能投顾</a>
          <a href="http://www.jq22.com" className="blue">场景化</a>
          <a href="http://www.jq22.com">智能投顾</a>
          <a href="http://www.jq22.com" className="red">智能投顾</a>
          <a href="http://www.jq22.com/" className="yellow">知识图谱</a>
          <a href="http://www.jq22.com/">风险预警</a>
          <a href="http://www.jq22.com/" className="red">个性化定制</a>
          <a href="http://www.jq22.com/">个性化定制</a>
        </div>
    )
  }
}

export default TagCloudComponent;