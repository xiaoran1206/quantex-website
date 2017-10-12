import React, { Component } from 'react';
import icon_sys_oems_bg from '../../../images/page05/icon_sys_oems_bg.png';
import icon_sys_ims_bg from '../../../images/page05/icon_sys_ims_bg.png';
import icon_sys_data_bg from '../../../images/page05/icon_sys_data_bg.png';
import icon_sys_cvm_bg from '../../../images/page05/icon_sys_cvm_bg.png';
import './index.css';

class FooterComponent extends Component {
  render() {
    return (
      <div className="page-05-footer">
        <h4>产品用户体验现代感强, 可视化程度高</h4>
        <ul className="systems">
          <li className="systems-item">
            <img src={icon_sys_oems_bg} alt="图片加载失败"/>
            <div className="system-text">
              <div className="icon-sys icon-sys-oems"></div>
              <p>核心交易系统<br/>QuantexOEMS</p>
            </div>
          </li>
          <li className="systems-item">
            <img src={icon_sys_ims_bg} alt="图片加载失败"/>
            <div className="system-text">
              <div className="icon-sys icon-sys-ims"></div>
              <p>金融数据分析平台<br/>QuantexData</p>
            </div>
          </li>
          <li className="systems-item">
            <img src={icon_sys_data_bg} alt="图片加载失败"/>
            <div className="system-text">
              <div className="icon-sys icon-sys-data"></div>
              <p>宽拓投资管理系统<br/>QuantexIMS</p>
            </div>
          </li>
          <li className="systems-item">
            <img src={icon_sys_cvm_bg} alt="图片加载失败"/>
            <div className="system-text">
              <div className="icon-sys icon-sys-cvm"></div>
              <p>宽拓投资管理系统<br/>QuantexCVM</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default FooterComponent;