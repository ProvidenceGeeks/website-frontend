import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import SocialFollowLinks from '../social-follow-links/social-follow-links';
import Header from './header';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  let header;

  beforeEach(() => {
    header = mount(<Header />);
  });

  it('should not be null', () => {
    expect(header).not.toBeNull();
    expect(header.find('.header').length).toEqual(1);
  });

  it('should have the PVD Geeks Logo component as a home page link', () => {
    expect(header.find('.logo a').length).toEqual(1);
    expect(header.find(PvdGeeksLogo).length).toEqual(1);
    expect(header.find('.logo a').prop('href')).toEqual('/');
  });

  it('should have a SocialFollowLinks component', () => {
    expect(header.find(SocialFollowLinks).length).toBe(1);
  });

});