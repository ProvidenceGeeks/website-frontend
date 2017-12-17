import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PvdGeeksLogo from '../../components/pvd-geeks-logo/pvd-geeks-logo';
import HeroBanner from './hero-banner';

configure({ adapter: new Adapter() });

describe('Hero Banner component', () => {
  let heroBanner;

  describe('Default Configuration', () => {

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

  describe('Custom Background Image provided from props', () => {
    const customBackgroundImage = 'http://mydomain.com/image.png';

    beforeEach(() => {
      heroBanner = mount(<HeroBanner backgroundImage={customBackgroundImage}/>);
    });

    it('should test the background image is set to props.backgroundImage', () => {
      const path = heroBanner.find('.jumbotron').props('style').style.backgroundImage;

      expect(path).toEqual(`url(${customBackgroundImage})`);
    });

  });

  describe('Custom Title provided from props', () => {
    const customTitle = 'My Custom Title';

    beforeEach(() => {
      heroBanner = mount(<HeroBanner title={customTitle}/>);
    });

    it('should test the heading text is set to props.title', () => {
      expect(heroBanner.find('.hero-title').text()).toEqual(customTitle);
    });

  });

  describe('Custom Children provided from props', () => {
    beforeEach(() => {
      heroBanner = mount(
        <HeroBanner>
          <h1 className="from-spec">Hello World!</h1>
        </HeroBanner>
      );
    });

    it('should test the custom content provided is set correctly', () => {
      const customContent = heroBanner.find('h1.from-spec');

      expect(customContent.length).toEqual(1);
      expect(customContent.text()).toEqual('Hello World!');
    });

  });

});