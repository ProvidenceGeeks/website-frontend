import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostDetails from './post-details';

configure({ adapter: new Adapter() });

describe('Post Details View component', () => {
  let postDetails;
  let params = {
    id: '1'
  };

  beforeEach(() => {
    postDetails = mount(<PostDetails params={params}/>);
  });

  it('should not be null', () => {
    expect(postDetails).not.toBeNull();
  });
});