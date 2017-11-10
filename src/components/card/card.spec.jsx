import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import Card from './card';

configure({ adapter: new Adapter() });

describe('Card Component', () => {
  const mockEvent = mockEvents[0];
  const card = mount(<Card
    title={ `${mockEvent.name}` }
    body={ `${mockEvent.description}`}
    heading={ `Heading: ${mockEvent.name}!!!` }
    link={ mockEvent.link }
    imgAlt={ `${mockEvent.name}` }
    imgSource={ 'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-1.jpg' }
    facebookShareMessage={ 'Post this to Facebook!' }
    twitterShareMessage={ 'Post this to Twitter!' }
  />);

  // TODO
  describe('default props', () => {
    it('should test default values when props are not provided', () => {

    });
  });

  describe('card elements', () => {
    it('should not be null', () => {
      expect(card).not.toBeNull();
      expect(card.find('.card').length).toEqual(1);
    });

    it('should test image and image alt display correctly', () => {
      const img = card.find('img');

      expect(img.prop('src')).toEqual('https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-1.jpg');
      expect(img.prop('alt')).toEqual(mockEvent.name);
    });

    it('should test title displays correctly', () => {
      const title = card.find('.card-title');

      expect(title.text()).toEqual(mockEvent.name);
    });

    it('should test the heading displays correctly', () => {
      const heading = card.find('.card-heading');

      expect(heading.text()).toContain(`Heading: ${mockEvent.name}!!!`);
    });

    it('should test facebook share displays correctly', () => {
      const message = encodeURIComponent('Post this to Facebook!');

      expect(card.find('.facebook-share').prop('href')).toEqual(`https://www.facebook.com/sharer/sharer.php?u=${message}`);
      expect(card.find('.facebook-icon').length).toEqual(1);
    });

    it('should test twitter share displays correctly', () => {
      const message = encodeURIComponent('Post this to Twitter!');

      expect(card.find('.twitter-share').prop('href')).toEqual(`https://twitter.com/intent/tweet?status=${message}`);
      expect(card.find('.twitter-icon').length).toEqual(1);
    });

    it('should test the body displays correctly', () => {
      const body = card.find('.card-text');

      expect(body.text()).toEqual('No Description Available.');
    });
  });

  // TODO
  describe('filterDescription', () => {
    it('should test filterDescription when a description is passed', () => {

    });

    it('should test filterDescription when no description is passed', () => {

    });
  });

});