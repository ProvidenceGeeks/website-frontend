import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Bootstrap from './bootstrap';

configure({ adapter: new Adapter() });

describe('Bootstrap Component', () => {
  const bootstrap = mount(<Bootstrap />);

  it('should not be null', () => {
    expect(bootstrap).not.toBeNull();
  });

  it('should have a Header Component', () => {
    expect(bootstrap.find('.header').length).toEqual(1);
  });

  it('should have a Home Component', () => {
    expect(bootstrap.find('.home').length).toEqual(1);
  });

  it('should have a Footer Component', () => {
    expect(bootstrap.find('.footer').length).toEqual(1);
  });
});