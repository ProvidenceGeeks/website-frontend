import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import SocialFollowLinks from '../social-follow-links/social-follow-links';
import Footer from './footer';

configure({ adapter: new Adapter() });

describe('Footer component', () => {
  let footer;

  beforeEach(() => {
    footer = mount(<Footer />);
  });

  it('should not be null', () => {
    expect(footer).not.toBeNull();
    expect(footer.find('.footer').length).toEqual(1);
  });

  it('should have the Providence Geeks logo as a home page link', () => {
    expect(footer.find('.logo a').length).toEqual(1);
    expect(footer.find(PvdGeeksLogo).length).toEqual(1);
    expect(footer.find('.logo a').prop('href')).toEqual('/');
  });

  it('should have a SocialFollowLinks component', () => {
    expect(footer.find(SocialFollowLinks).length).toBe(1);
  });

  it('should have copyright notice with current year', () => {
    const copyright = footer.find('.row .copyright');
    const dynamicDate = new Date().getFullYear();

    expect(copyright.text()).toBe(`© Copyright ${dynamicDate} Providence Geeks`);
  });
});