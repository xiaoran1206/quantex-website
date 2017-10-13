import React, { Component } from 'react';
import img_01 from '../../../images/page04/img_01.png';
import img_02 from '../../../images/page04/img_02.png';
import img_03 from '../../../images/page04/img_03.png';
import img_04 from '../../../images/page04/img_04.png';
import img_05 from '../../../images/page04/img_05.png';
import img_06 from '../../../images/page04/img_06.png';
import img_solution_method from '../../../images/page04/img_solution_method.png';
import Nav from '../../nav/index';
import Arrow from '../../arrow/index'; // 向下滚动提示箭头
import './index.css';

class Page04Component extends Component {
  render() {
    return (
        <div className="page-container page-04">
          <Nav active={4}/>
          <div className="main">
            <section className="sec-left">
              <div className="sec-left-content">
                <div className="img-solution-method">
                  <img src={img_solution_method} alt="解决方案"/>
                </div>
                <dl>
                  <dt><span className="text-decoration">解决</span>方案</dt>
                  <dd>宽拓融合'数据'、'技术'、'专业投资'三<br/>大核心要素, 推出全新解决方案</dd>
                </dl>
              </div>
            </section>
            <section className="sec-middle">
              <p className="h3">宽拓投资科技解决方案</p>
              <p className="h4">Invest In Technology Solutions</p>
            </section>
            <section className="sec-right">
              <div className="break">
                <div className="break-img">
                  <img src={img_01} alt="图片加载失败"/>
                  <img src={img_02} alt="图片加载失败"/>
                </div>
                <div className="break-txt">
                  <dl>
                    <dt><span className="text-decoration">投资</span>管理</dt>
                    <dd>提高投资决策能力<br/>提升产品运营效率</dd>
                  </dl>
                </div>
              </div>
              <div className="break">
                <div className="break-img">
                  <img src={img_03} alt="图片加载失败"/>
                  <img src={img_04} alt="图片加载失败"/>
                </div>
                <div className="break-txt">
                  <dl>
                    <dt><span className="text-decoration">数据</span>分析</dt>
                    <dd>提高数据运营能力<br/>提升精细化管理能力</dd>
                  </dl>
                </div>
              </div>
              <div className="break">
                <div className="break-img">
                  <img src={img_05} alt="图片加载失败"/>
                  <img src={img_06} alt="图片加载失败"/>
                </div>
                <div className="break-txt">
                  <dl>
                    <dt><span className="text-decoration">方案</span>特点</dt>
                    <dd>产品贴近客户打造,引领业务创新<br/>技术整合后优势明显,领先同行<br/>内嵌数据驱动式引擎,迎接AI未来</dd>
                  </dl>
                </div>
              </div>
            </section>
          </div>
          <Arrow nextIndex={4}/>
        </div>
    )
  }
}

export default Page04Component;