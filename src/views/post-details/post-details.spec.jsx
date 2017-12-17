import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockPosts from '../../../test/__mocks__/mock-posts.json';
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
    const mockPost = mockPosts[0];

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

  it('should test an article is rendered', () => {
    postDetails.setState({
      mockPost
    });

    expect(postDetails.find('article').length).toEqual(1);
  });

  xdescribe('Custom Hero Banner', () => {
    xit('should test custom background image', () => {

    });

    xit('should test custom text', () => {

    });
  });

  // TODO
  xdescribe('No match found for provided param.id', () => {
    // error message?
  });

});