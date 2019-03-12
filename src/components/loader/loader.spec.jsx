import * as React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loader, { LOADING_STATES } from './loader';

configure({ adapter: new Adapter() });

describe('Loader component when loading state is LOADING', () => {
  let loader;
  const loadingMessage = 'Loading Upcoming Events...';
  const child = 'Inner Content';

  beforeEach(() => {
    loader = shallow(<Loader status={LOADING_STATES.LOADING} loadingMessage={loadingMessage}>{child}</Loader>);
  });

  it('should not be null', () => {
    expect(loader).not.toBeNull();
    expect(loader.length).toEqual(1);
  });

  it('should display loader when loading state is LOADING', () => {
    expect(loader.find('.loader').length).toEqual(1);
  });

  it('should display loading message when loading state is LOADING', () => {
    expect(loader.find('.loader-message').text()).toEqual(loadingMessage);
  });

  it('should NOT display error message when loading state is LOADING', () => {
    expect(loader.find('.message.error').length).toEqual(0);
  });

  it('should NOT display child component when loading state is LOADING', ()=>{
    expect(loader.find(child).length).toEqual(0);
  });
});

describe('Loader component when loading state is ERROR', () => {
  let loader;
  const errorMessage = 'Unable to Load...';
  const child = 'Inner Content';

  beforeEach(() => {
    loader = shallow(<Loader status={LOADING_STATES.ERROR} errorMessage={errorMessage}/>);
  });

  it('should not be null', () => {
    expect(loader).not.toBeNull();
    expect(loader.length).toEqual(1);
  });

  it('should display error message when loading state is ERROR', () => {
    expect(loader.find('.message.error').text()).toEqual(errorMessage);
  });

  it('should NOT display loader when loading state is ERROR', () => {
    expect(loader.find('.loader').length).toEqual(0);
  });

  it('should NOT display child component when loading state is LOADING', ()=>{
    expect(loader.find(child).length).toEqual(0);
  });
});

describe('Loader component when loading state is LOADED', () => {
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

  it('should display child component when loading state is LOADED', () => {
    expect(loader.props().children).toEqual(child);
  });

  it('should NOT display error message when loading state is LOADED', () => {
    expect(loader.find('.message.error').length).toEqual(0);
  });

  it('should NOT display loader when loading state is LOADED', () => {
    expect(loader.find('.loader').length).toEqual(0);
  });
});