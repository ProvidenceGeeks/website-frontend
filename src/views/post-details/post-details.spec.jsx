import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostDetails from './post-details';

configure({ adapter: new Adapter() });

describe('Post Details View component', () => {
  let postDetails;

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

    postDetails = mount(<PostDetails />);
  });

  it('should not be null', () => {
    expect(postDetails).not.toBeNull();
  });
});