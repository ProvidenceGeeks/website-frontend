import * as React from 'react';
import raf from '../../react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Hello from './header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  const hello = shallow(<Hello />);

  it('should not be null', () => {
    expect(hello).not.toBeNull();
  });
});