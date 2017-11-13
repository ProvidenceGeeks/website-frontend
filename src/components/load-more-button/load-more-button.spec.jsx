import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadMoreButton from './load-more-button';

configure({ adapter: new Adapter() });

describe('Load More Button component', () => {
  let loadMore;
  let loadMoreButton;

  beforeEach(() => {
    loadMore = jest.fn();
    loadMoreButton = shallow(<LoadMoreButton loadMore={ loadMore }/>);
  });

  it('should not be null', () => {
    expect(loadMoreButton).not.toBeNull();
    expect(loadMoreButton.find('.load-more-button').length).toEqual(1);
  });

  it('should call the callback function once when clicked once', () => {
    loadMoreButton.find('button.load-more').simulate('click');

    expect(loadMore.mock.calls.length).toEqual(1);
  });

});