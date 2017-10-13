import React, { Component } from 'react';
import partnerJS from '../../../images/page06/partner_js.png';
import partnerNH from '../../../images/page06/partner_nh.png';
import partnerZX from '../../../images/page06/partner_zx.png';
import partnerTPY from '../../../images/page06/partner_tpy.png';
import './index.css';

// 合作伙伴
class PartnerComponent extends Component {
  render() {
    return (
      <ul className="partners">
        <li>
          <img src={partnerJS} alt="图片加载失败"/>
          <img src={partnerNH} alt="图片加载失败"/>
        </li>
        <li>
          <img src={partnerZX} alt="图片加载失败"/>
          <img src={partnerTPY} alt="图片加载失败"/>
        </li>
      </ul>
    )
  }
}

export default PartnerComponent;