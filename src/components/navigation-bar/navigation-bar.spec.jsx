import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Tab, Tabs } from 'react-bootstrap';
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
            return [];
          }
        });
      });
    });

    navigationBar = mount(
      <NavigationBar>
        <EventsList title={'Custom Title 1'}/>
        <BlogPostsList title={'Custom Title 2'}/>
      </NavigationBar>
    );
  });

  it('should not be null', () => {
    expect(navigationBar).not.toBeNull();
  });

  it('should have one Tabs components', () => {
    expect(navigationBar.find(Tabs).length).toEqual(1);
  });

  it('should have two Tab components', () => {
    expect(navigationBar.find(Tab).length).toEqual(2);
  });

  it('should have an EventsList component in the first Tab', () => {
    const tabChildren = navigationBar.find(Tabs).props().children;
    const tabContent = tabChildren[0][0].props.children;

    expect(tabContent.type).toEqual(EventsList);
  });

  it('should have a BlogPostsList component in the second Tab', () => {
    const tabChildren = navigationBar.find(Tabs).props().children;
    const tabContent = tabChildren[0][1].props.children;

    expect(tabContent.type).toEqual(BlogPostsList);
  });

  it('should have the correct custom title for the first tab', () => {
    const tabChildren = navigationBar.find(Tabs).props().children;
    const tabContent = tabChildren[0][0].props.children;

    expect(tabContent.props.title).toEqual('Custom Title 1');
  });

  it('should have the correct custom title for the second tab', () => {
    const tabChildren = navigationBar.find(Tabs).props().children;
    const tabContent = tabChildren[0][1].props.children;

    expect(tabContent.props.title).toEqual('Custom Title 2');
  });

});