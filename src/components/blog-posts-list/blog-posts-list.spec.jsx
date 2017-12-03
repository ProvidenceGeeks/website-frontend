import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockPosts from '../../../test/__mocks__/mock-posts.json';
import BlogPostsList from './blog-posts-list';

configure({ adapter: new Adapter() });

describe('Blog Posts List component', () => {
  let blogPostsList;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          status: 200,
          json: () => {
            return mockPosts;
          }
        });
      });
    });

    blogPostsList = mount(<BlogPostsList/>);
  });

  it('should not be null', () => {
    expect(blogPostsList).not.toBeNull();
  });

  xit('should have placeholder text', () => {
    expect(blogPostsList.text()).toBe('BLOG POSTS GO HERE');
  });
});