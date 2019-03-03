import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loader from './loader';

configure({ adapter: new Adapter() });

describe('Loader component', () => {
  let loader;
  const message = 'Loading Upcoming Events...';

  beforeEach(() => {
    loader = shallow(<Loader message={message}/>);
  });

  it('should not be null', () => {
    expect(loader).not.toBeNull();
    expect(loader.length).toEqual(1);
  });

  it('should have one loader element', () => {
    expect(loader.find('.loader').length).toEqual(1);
  });

  it('should have one message element with content', () => {
    expect(loader.find('.loader-message').text()).toEqual(message);
  });
});