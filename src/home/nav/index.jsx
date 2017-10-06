import React, { Component } from 'react';
import './index.css';
// 字母导航组件
class NavComponent extends Component {
  render() {
    const { active } = this.props;
    return (
        <p className="nav">
          <span className={active === 1 ? 'active' : ''}>Q</span>
          <span className={active === 2 ? 'active' : ''}>U</span>
          <span className={active === 3 ? 'active' : ''}>A</span>
          <span className={active === 4 ? 'active' : ''}>N</span>
          <span className={active === 5 ? 'active' : ''}>T</span>
          <span className={active === 6 ? 'active' : ''}>E</span>
          <span>X</span>
        </p>
    );
  }
}

export default NavComponent;
