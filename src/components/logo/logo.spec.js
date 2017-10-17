import * as React from 'react';
import raf from '../../../test/shims/react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Logo from './logo';

configure({ adapter: new Adapter() });

describe('Logo SVG Component', () => {
  const hello = shallow(<Logo />);

  it('should not be null', () => {
    expect(hello).not.toBeNull();
  });
});