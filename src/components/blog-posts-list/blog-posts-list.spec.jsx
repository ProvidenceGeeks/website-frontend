import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockPosts from '../../../test/__mocks__/mock-posts.json';
import BlogPostsList from './blog-posts-list';
import Card from '../card/card';
import CardGrid from '../card-grid/card-grid';

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

  it('should have a CardGrid component', () => {
    expect(blogPostsList.find(CardGrid).length).toEqual(1);
  });

  describe('BlogPostsList.modelPostDataForCard', () => {
    const mockPost = mockPosts.slice(0, 1)[0];
    const modeledData = BlogPostsList.modelPostsDataForCard([mockPost])[0];
    const canonicalLink = `${window.location.origin}/posts/${mockPost.id}`;

    it('should test title', () => {
      expect(modeledData.title).toEqual(mockPost.title.rendered);
    });

    it('should test body', () => {
      expect(modeledData.body).toEqual(Card.formatHtmlContent(mockPost.excerpt.rendered));
    });

    it('should test link', () => {
      expect(modeledData.link).toEqual(`/posts/${mockPost.id}`);
    });

    it('should test imgSource', () => {
      expect(modeledData.imgSource).toEqual(mockPost.media_details.medium_large
        ? mockPost.media_details.medium_large.source_url
        : undefined);
    });

    it('should test imgAlt', () => {
      expect(modeledData.imgAlt).toEqual(mockPost.title.rendered);
    });

    it('should test facebookShareMessage', () => {
      expect(modeledData.facebookShareMessage).toEqual(canonicalLink);
    });

    it('should test twitterShareMessage', () => {
      expect(modeledData.twitterShareMessage).toEqual(`${ mockPost.title.rendered } - ${ canonicalLink } ! @ProvidenceGeeks`);
    });

  });

  describe('BlogPostsList.formatHeading', () => {
    it('should test when no value passed', () => {
      const heading = BlogPostsList.formatHeading();

      expect(heading).toEqual(' ');
    });

    it('should test when a post is passed', () => {
      const mockPost = mockPosts.slice(0, 1)[0];
      const heading = BlogPostsList.formatHeading(mockPost);

      expect(heading).toEqual(`${mockPost.author_name} 11/27/17`);
    });

  });
});