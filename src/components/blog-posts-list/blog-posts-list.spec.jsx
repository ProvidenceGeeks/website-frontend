import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BlogPostsList from './blog-posts-list';

configure({ adapter: new Adapter() });

describe('Blog Posts List component', () => {
  const blogPostsList = shallow(<BlogPostsList/>);

  it('should not be null', () => {
    expect(blogPostsList).not.toBeNull();
  });

  it('should have placeholder text', () => {
    expect(blogPostsList.text()).toBe('BLOG POSTS GO HERE');
  });

});