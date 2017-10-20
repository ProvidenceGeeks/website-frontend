import * as React from 'react';
import raf from '../../../test/shims/react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PvdGeeksLogo from './pvd-geeks-logo';

configure({ adapter: new Adapter() });

describe('Logo SVG Component', () => {
  const logo = shallow(<PvdGeeksLogo />);

  it('should not be null', () => {
    expect(logo).not.toBeNull();
  });
});