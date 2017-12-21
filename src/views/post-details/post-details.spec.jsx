import * as React from 'react';
import moment from 'moment';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockPosts from '../../../test/__mocks__/mock-posts.json';
import HeroBanner from '../../components/hero-banner/hero-banner';
import PostDetails from './post-details';
import ShareBar from '../../components/share-bar/share-bar';

configure({ adapter: new Adapter() });

describe('Post Details View component', () => {
  let postDetails;
  const mockPost = mockPosts[0];
  const params = {
    id: mockPost.id
  };

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

    postDetails = mount(<PostDetails params={params}/>);
  });

  it('should not be null', () => {
    expect(postDetails).not.toBeNull();
  });

  it('should test a Share bar is shown', () => {
    postDetails.setState({
      mockPost
    });

    expect(postDetails.find(ShareBar).length).toEqual(1);
  });

  it('should test a Share bar is shown with the right link', () => {
    postDetails.setState({
      mockPost
    });

    expect(postDetails.find(ShareBar).prop('link')).toEqual(window.location.href);
  });

  it('should test an article is rendered', () => {
    postDetails.setState({
      mockPost
    });

    expect(postDetails.find('article').length).toEqual(1);
  });

  describe('Custom Hero Banner', () => {
    it('should test custom background image', () => {
      postDetails.setState({
        mockPost
      });

      expect(postDetails.find(HeroBanner).prop('backgroundImage')).toEqual(mockPost.media_details.large.source_url);
    });

    it('should test custom title', () => {
      postDetails.setState({
        mockPost
      });

      expect(postDetails.find(HeroBanner).prop('title')).toEqual(mockPost.title.rendered);
    });

    it('should test custom children', () => {
      postDetails.setState({
        mockPost
      });

      const customContent = postDetails.find(HeroBanner).find('h3.custom-title');

      expect(customContent.length).toEqual(1);
      expect(customContent.text()).toEqual(`${mockPost.author_name} | ${moment(mockPost.date).utcOffset(-5).format('MM/DD/YY')}`);
    });
  });

  xdescribe('No match found for provided post id (param.id)', () => {

  });

});