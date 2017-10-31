import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils';

import HeroBanner from './hero-banner';
import Logo from '../../components/pvd-geeks-logo/pvd-geeks-logo';

const TestUtils = ReactTestUtils;

configure({ adapter: new Adapter() });

describe('Hero-Banner Component', () => {
  const heroBanner = mount(<HeroBanner />);

  it('should not be null', () => {
    expect(heroBanner).not.toBeNull();
  });

  it('should have a Logo Component', () => {
    var logoComponent = require('../../components/pvd-geeks-logo/pvd-geeks-logo');

    var page = TestUtils.renderIntoDocument(
      <Logo />
    );

    TestUtils.scryRenderedComponentsWithType(page, logoComponent);
  });

  it('should have text in the hero-banner', () => {
    const heroText = heroBanner.find('.hero-text');

    expect(heroText.text()).toBe('The goal of Providence Geeks is to help Rhode Island’s ' +
                                 'digital innovators connect, collaborate, and ultimately make ' +
                                 'the City-State and its geeks info-technology leaders.');
  });
});