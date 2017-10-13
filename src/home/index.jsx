import React, { Component } from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';
import { Page01, Page02, Page03, Page04, Page05, Page06 } from './pages';
import './index.css';

class HomeComponent extends Component {
  render() {
    let options = {
      activeSection: 0,
      sectionClassName:     'section-container',
      anchors:              ['FinTech', '关于Quantex', '产品系列', 'Solution', 'Feature', 'Partner'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        false,
      // sectionPaddingTop:    '50px',
      // sectionPaddingBottom: '50px',
      // arrowNavigation:      true
    };
    return (
        <div>
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
