import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  let header;

  beforeEach(() => {
    header = mount(<Header />);
  });

  it('should not be null', () => {
    expect(header).not.toBeNull();
    expect(header.find('.header').length).toEqual(1);
  });

  it('should have the Providence Geeks logo as a home page link', () => {
    expect(header.find('.logo a').length).toEqual(1);
    expect(header.find('svg.pvd-geeks-logo').length).toEqual(1);
    expect(header.find('.logo a').prop('href')).toEqual('/');
  });

  it('should have a social container with 3 links', () => {
    expect(header.find('.social-container').length).toEqual(1);
    expect(header.find('.social-container a').length).toEqual(3);
  });

  it('should have facebook link', () => {
    const facebookLink = header.find('.social-container .facebook-link');

    expect(facebookLink.prop('href')).toEqual('https://www.facebook.com/providencegeeks/');
    expect(facebookLink.prop('title')).toEqual('Like Us');
    expect(facebookLink.length).toEqual(1);
    expect(facebookLink.prop('target')).toEqual('_blank');
    expect(facebookLink.find('svg.facebook-icon').length).toEqual(1);
  });

  it('should have slack link', () => {
    const slackLink = header.find('.social-container .slack-link');

    expect(slackLink.prop('href')).toEqual('http://providencegeeks.slack.com/');
    expect(slackLink.prop('title')).toEqual('Join Us');
    expect(slackLink.length).toEqual(1);
    expect(slackLink.prop('target')).toEqual('_blank');
    expect(slackLink.find('svg.slack-icon').length).toEqual(1);
  });

  it('should have twitter link', () => {
    const twitterLink = header.find('.social-container .twitter-link');

    expect(twitterLink.prop('href')).toEqual('https://twitter.com/providencegeeks');
    expect(twitterLink.prop('title')).toEqual('Follow Us');
    expect(twitterLink.prop('target')).toEqual('_blank');
    expect(twitterLink.length).toEqual(1);
    expect(twitterLink.find('svg.twitter-icon').length).toEqual(1);
  });

});