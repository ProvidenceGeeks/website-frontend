import * as React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BlogPostsList from '../../components/blog-posts-list/blog-posts-list';
import EventsList from '../../components/events-list/events-list';
import HeroBanner from '../../components/hero-banner/hero-banner';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import Home from './home';

configure({ adapter: new Adapter() });

describe('Home View component', () => {
  let home;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          status: 200,
          json: () => {
            return [];
          }
        });
      });
    });

    home = mount(<Home />);
  });

  it('should not be null', () => {
    expect(home).not.toBeNull();
  });

  it('should have a Hero Banner component', () => {
    expect(home.find(HeroBanner).length).toEqual(1);
  });

  it('should have a Navigation Bar component', () => {
    expect(home.find(NavigationBar).length).toEqual(1);
  });

  it('should have a EventsList component', () => {
    expect(home.find(EventsList).length).toEqual(1);
  });

  it('should not mount a BlogPostsList component', () => {
    expect(home.find(BlogPostsList).length).toEqual(0);
  });

  it('should have a BlogPostsList component', () => {
    const home = shallow(<Home />);
    expect(home.find(BlogPostsList).length).toEqual(1);
  });
});