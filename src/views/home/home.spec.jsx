import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './home';

configure({ adapter: new Adapter() });

describe('Hello View', () => {
  const home = shallow(<Home />);

  it('should not be null', () => {
    expect(home).not.toBeNull();
  });

  it('should have a container be null', () => {
    expect(home.find('.home').length).toEqual(1);
  });

});