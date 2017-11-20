import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import BlogPostsList from '../blog-posts-list/blog-posts-list';
import EventsList from '../events-list/events-list';
import NavigationBar from './navigation-bar';

configure({ adapter: new Adapter() });

describe('Navigation Bar component', () => {
  let navigationBar;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          status: 200,
          json: () => {
            return mockEvents;
          }
        });
      });
    });

    navigationBar = mount(<NavigationBar />);
  });

  it('should not be null', () => {
    expect(navigationBar).not.toBeNull();
  });

  it('should have an Events List component in the Tab component', () => {
    expect(navigationBar.find(EventsList).length).toEqual(1);
  });

  it('should have a Blog Posts List component in the Tab component', () => {
    expect(navigationBar.find(BlogPostsList).length).toEqual(1);
  });
});