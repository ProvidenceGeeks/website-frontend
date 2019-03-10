import * as React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loader, { LOADING_STATES } from './loader';

configure({ adapter: new Adapter() });

describe('Loader component renders loading message', () => {
  let loader;
  const loadingMessage = 'Loading Upcoming Events...';

  beforeEach(() => {
    loader = shallow(<Loader status={LOADING_STATES.LOADING} loadingMessage={loadingMessage}/>);
  });

  it('should not be null', () => {
    expect(loader).not.toBeNull();
    expect(loader.length).toEqual(1);
  });

  it('should have one loader element', () => {
    expect(loader.find('.loader').length).toEqual(1);
  });

  it('should have one message element with content', () => {
    expect(loader.find('.loader-message').text()).toEqual(loadingMessage);
  });
});

describe('Loader component renders error message', () => {
  let loader;
  const errorMessage = 'Unable to Load...';

  beforeEach(() => {
    loader = shallow(<Loader status={LOADING_STATES.ERROR} errorMessage={errorMessage}/>);
  });

  it('should not be null', () => {
    expect(loader).not.toBeNull();
    expect(loader.length).toEqual(1);
  });

  it('should have one message element with content', () => {
    expect(loader.find('.message.error').text()).toEqual(errorMessage);
  });
});

describe('Loader component renders loaded component', () => {
  let loader;
  const loadingMessage = 'Loading Upcoming Events...';
  const errorMessage = 'Unable to Load...';
  const child = 'Inner Content';

  beforeEach(() => {
    loader = mount(<Loader status={LOADING_STATES.LOADED} loadingMessage={loadingMessage} errorMessage={errorMessage}>{child}</Loader>);
  });

  it('should not be null', () => {
    expect(loader).not.toBeNull();
    expect(loader.length).toEqual(1);
  });

  it('should render child component on load', () => {
    expect(loader.props().children).toEqual(child);
  });
});