import * as React from 'react';
import raf from '../../react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Bootstrap from './bootstrap';

configure({ adapter: new Adapter() });

describe('Bootstrap Component', () => {
  const bootstrap = shallow(<Bootstrap />);

  it('should not be null', () => {
    expect(bootstrap).not.toBeNull();
  });
});