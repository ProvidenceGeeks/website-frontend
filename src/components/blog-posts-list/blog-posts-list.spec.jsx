import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockPosts from '../../../test/__mocks__/mock-posts.json';
import BlogPostsList from './blog-posts-list';
import Card from '../card/card';
import LoadMoreButton from '../load-more-button/load-more-button';

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

  it('should display three cards when there are three visible events', () => {
    blogPostsList.setState({
      visiblePosts: mockPosts.slice(0, 3)
    });

    expect(blogPostsList.find(Card).length).toEqual(blogPostsList.state().visiblePosts.length);
  });

  it('should have a hidden load more button', () => {
    expect(blogPostsList.find(LoadMoreButton).length).toEqual(0);
  });

  xit('should load more posts when the load more button is clicked', () => {
    // global.fetch = jest.fn().mockImplementation(() => {
    //   return new Promise((resolve) => {
    //     resolve({
    //       status: 200,
    //       json: () => {
    //         console.log('return mock Posts', (mockPosts.concat(mockPosts).concat(mockPosts)).length);
    //         return (mockPosts.concat(mockPosts).concat(mockPosts));
    //       }
    //     });
    //   });
    // });

    blogPostsList = mount(<BlogPostsList/>);

    blogPostsList.setState({
      visiblePosts: mockPosts.concat(mockPosts)
    });

    // const existingPosts = blogPostsList.state().visiblePosts;
    // const loadMore = () => {
    //   blogPostsList.setState({
    //     visiblePosts: existingPosts.concat(mockPosts.slice(0, mockPosts.length - 1))
    //   });
    // };
    // const loadMoreButton = shallow(<LoadMoreButton loadMore={ loadMore }/>);

    // console.log('card length before', blogPostsList.find(Card).length);

    blogPostsList.find(LoadMoreButton).simulate('click');

    // console.log('card length after', blogPostsList.find(Card).length);
    // expect(blogPostsList.find(Card).length).toEqual(blogPostsList.state().visiblePosts.length);
  });

});