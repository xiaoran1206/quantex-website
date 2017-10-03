import React, { Component } from 'react';
// import { Fullpage, Slide } from 'fullpage-react';
// import logo from '../images/logo.svg';
import { Page01, Page02, Page03, Page04, Page05, Page06 } from './pages';
import './index.css';
import { SectionsContainer, Section, Header } from 'react-fullpage';

// const { Fullpage, Slide } = require('fullpage-react');

class HomeComponent extends Component {
  render() {
    // const fullPageOptions = {
    //   scrollSensitivity: 7,
    //   scrollSpeed: 500,
    //   enableArrowKeys: true,
    //   breakpoint: 375
    // };
    // const slides = [
    //     <Slide>slide 1</Slide>
    // ];
    // fullPageOptions.slides = slides;
    let options = {
      sectionClassName:     'section-container',
      anchors:              ['FinTech', '关于Quantex', '产品系列', 'section3', 'section4', 'section5'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        false,
      // sectionPaddingTop:    '50px',
      // sectionPaddingBottom: '50px',
      // arrowNavigation:      true
    };
    return (
        <div>
          <Header>
            <div className="fullpage-header">
              <a href="#FinTech">FinTech</a>
              <a href="#关于Quantex">关于Quantex</a>
              <a href="#产品系列">产品系列</a>
            </div>
          </Header>
          <SectionsContainer className="container" {...options}>
            <Section className="custom-section" verticalAlign="true"><Page01/></Section>
            <Section><Page02/></Section>
            <Section><Page03/></Section>
            <Section><Page04/></Section>
            <Section><Page05/></Section>
            <Section><Page06/></Section>
          </SectionsContainer>
        </div>
    );
  }
}

export default HomeComponent;
