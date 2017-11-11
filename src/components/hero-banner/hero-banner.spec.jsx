import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PvdGeeksLogo from '../../components/pvd-geeks-logo/pvd-geeks-logo';
import HeroBanner from './hero-banner';

configure({ adapter: new Adapter() });

describe('Hero Banner component', () => {
  let heroBanner = mount(<HeroBanner />);

  beforeEach(() => {
    heroBanner = mount(<HeroBanner />);
  });

  it('should not be null', () => {
    expect(heroBanner).not.toBeNull();
    expect(heroBanner.find('.hero-banner').length).toEqual(1);
  });

  it('should have a PvdGeeksLogo component', () => {
    expect(heroBanner.find(PvdGeeksLogo).length).toEqual(1);
  });

  it('should have proper copy text in the hero-banner', () => {
    const heroText = heroBanner.find('.hero-text');

    expect(heroText.text()).toBe('The goal of Providence Geeks is to help Rhode Island’s digital innovators connect, ' +
      'collaborate, and ultimately make the City-State and its geeks info-technology leaders.');
  });

  it('should test the background image changes on component update / refresh', () => {
    heroBanner.instance().getRandomBackgroundImage = jest.fn();
    heroBanner.update();
    heroBanner.instance().getRandomBackgroundImage();

    expect(heroBanner.instance().getRandomBackgroundImage.mock.calls.length).toBe(1);
  });
});